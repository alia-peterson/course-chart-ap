import React, { useState, useRef, useEffect } from "react";
import { useRouter } from 'next/router'
import { useAppContext } from '../context/app-context'
import styles from '../styles/addModuleForm.module.scss'
import { patchData } from '../context/apiCalls';

export default function editModuleForm() {
  const router = useRouter()
  const { sharedState, setSharedState } = useAppContext()
  const { hasBeenUpdated, setHasBeenUpdated } = useAppContext()
  const [moduleName, setModuleName] = useState('')
  const [totalInputMinutes, setTotalInputMinutes] = useState(0)
  const [totalInputPercent, setTotalInputPercent] = useState(0)
  const [barColor, setBarColor] = useState('')
  const [currentCourse, setCurrentCourse] = useState({})
  let activities = sharedState.activities
  let activityIdAndInput = {}

  const [currentModule, setCurrentModule] = useState({})

  let states = 
    Object.fromEntries(Object.keys(activities).map(key => {
      return [key, [useState(0), useState('')] ]
  }))

  const calculateGoalMinutesRange = (course) => {
    if (course && course.goal ) {
    const splitString = course.goal.replace(' hours', '').split('-')
    const makeMinutes = num => {
      return parseInt(num)*60
    }
    return [makeMinutes(splitString[0]), makeMinutes(splitString[1])]
    }
    return [0, 0]
  }

  const [courseGoalMinutesMin, courseGoalMinutesMax] = calculateGoalMinutesRange(currentCourse)

  const rangeWidth = (min, max) => {
    return ((max - min) / max) *100 + '%'
  }

  let range = rangeWidth(courseGoalMinutesMin, courseGoalMinutesMax)

  const getColor = (percentMax, totalMins, courseGoalMinutesMin) => {
    let color
    switch(true) {
      case (percentMax >= 100):
        color = 'red'
        break;
      case (totalMins >= courseGoalMinutesMin):
        color = 'orange'
        break;
      default:
        color = '#FAC70F'
        break;
    }
    return color
  }

  useEffect(() => {
    if (sharedState[sharedState.currentCourse]) {
      setCurrentCourse(sharedState[sharedState.currentCourse])
      const mod = sharedState[sharedState.currentCourse].modules.find(mod => sharedState.currentModule === mod.id)
      setCurrentModule(mod)
      setModuleName(mod.name)

      activityIdAndInput = Object.fromEntries(mod.moduleActivities.map(modActivity => {
        return [modActivity.activity.id, [modActivity.input, modActivity.notes]]
      })
      )

      Object.values(states).forEach((arrayOfStates, i) => {
        console.log(arrayOfStates[0][1])
        if (activityIdAndInput[i+1]) {
          arrayOfStates[0][1](activityIdAndInput[i+1][0])
          arrayOfStates[1][1](activityIdAndInput[i+1][1])
        }
      })
    
      

    }
  }, [hasBeenUpdated])

  useEffect(() => {
    if (sharedState[sharedState.currentCourse]) {
      const totalMins = Object.values(states).reduce((total, state, i) => {
          const mins = parseInt(state[0][0]) * activities[i].multiplier
          return total + mins
        }, 0)
      const percentMax = ((totalMins/courseGoalMinutesMax) * 100) < 100 ? ((totalMins/courseGoalMinutesMax) * 100) :  100
      const color = getColor(percentMax, totalMins, courseGoalMinutesMin)
      setTotalInputMinutes(totalMins)
      setTotalInputPercent(percentMax + '%')
      setBarColor(color)
    }
  })

  const patch = async (postBody) => {
    const id = parseInt(sharedState.currentModule)
    const response = await patchData('module', postBody, id)
    console.log('RESPONSEINFORM', response)
    if (response.message !== 'Module updated successfully') {
        return alert(`Sorry, there was an error updating your module.` )
    }

    setHasBeenUpdated(!hasBeenUpdated)
    alert('Module updated!')
  }

  const addModule = event => {
    event.preventDefault()

    const allModActivites =  [
      ...Object.values(states).map((activity, i) => {
        return {
            input: parseInt(activity[0][0]),
            notes: activity[1][0],
            activityId: parseInt(i+1)
          }
      })
    ]

    const onlyChangedModActivities = allModActivites.filter(activity => activity.input !== 0 || activity.notes !== '')

    const modulePost = {
      name: moduleName,
      number: parseInt(currentModule.id),
      courseId: parseInt(currentCourse.id),
      moduleActivities: onlyChangedModActivities
    }

    patch(modulePost)

    router.push('/courseDashboard')
  }

  const makeInputs = (activities) => {
    if (sharedState[sharedState.currentCourse] && states) {
    const allInputs = Object.keys(activities).map((key, i) => (
        <div className={styles.inputStyle} key={i}>

          <div className={styles.titleMinutes}>
            <p className={styles.minutesTotal}>
              {states[key][0][0] * activities[key].multiplier}
            </p>
            <p className={styles.title} style={{border: `2px solid ${activities[key].color}`}}>
              {activities[key].name}
            </p>
          </div>

          <label
            className={styles.circleLabel}
            htmlFor={key}
            aria-label={activities[key].name}>
              {activities[key].metric}
          </label>
          <input
            className={styles.circleInput}
            value={states[key][0][0]}
            id={activities[key].id}
            type="number"
            min='0'
            onChange={(event) => states[key][0][1](event.target.value)}/>
          <div className={styles.description}>
            <p>{activities[key].description}</p>
          </div>

          <label
            className={styles.formLabel}
            htmlFor="notes"
            aria-label="notes">
          </label>
          <textarea
            className={styles.formNotes}
            value={states[key][1][0]}
            id="notes"
            rows="4"
            cols="50"
            onChange={(event) => states[key][1][1](event.target.value)}
          />
        </div>
      )
    )
    return allInputs
    }
  }

  return (
    <div className={styles.addModuleForm}>
      <h1 className={styles.formPageTitle}>Edit Module</h1>
      <p>
        <span className={styles.courseLabel}>
          Course:
        </span>
        <br />
        {currentCourse ? currentCourse.name : ''}
      </p>

      <form onSubmit={addModule}>

        <div className={styles.moduleMetaData}>

          <label
            className={styles.formLabel}
            htmlFor="module-name"
            aria-label="Module Name">
              Module Name
          </label>
          <input
            className={styles.formInput}
            id="module-name"
            type="text"
            value={moduleName}
            onChange={(event) => {setModuleName(event.target.value)}}
            required />

        </div>

        <div className={styles.topLabels}>
          <p className={styles.topLabelMinutes}>
            Total Minutes
          </p>
          <p className={styles.topLabelInput}>
            INPUT 🖊
          </p>
          <p className={styles.topLabelTime}>Time Per Task</p>
          <p className={styles.topLabelNotes}>Notes</p>
        </div>

        {states && makeInputs(activities)}

        <button
          className={styles.submitButton}
          type="submit">
            Edit Module
        </button>
      </form>

      <div className={styles.timeBar}>

        <div className={styles.timeBarLabels}>
          <p className={styles.timeLabel}>
            Total Recommended Time per Week:  {currentCourse ? currentCourse.goal :  ''}
          </p>

          <p className={styles.totalInputLabel}>
            Total Assigned in Hours:  {Math.trunc(((totalInputMinutes / 60) * 100)) / 100 }
          </p>
          <p className={styles.totalInputLabel}>
            Total Assigned in Minutes:  {totalInputMinutes}
          </p>
        </div>

        <div className={styles.timeMeter}>
          <div className={styles.range} style={{width: `${range}`}} ></div>
          <div className={styles.timeUsed} style={{width: `${totalInputPercent}`, backgroundColor: `${barColor}`}} ></div>
        </div>

      </div>

      </div>
  )
}
