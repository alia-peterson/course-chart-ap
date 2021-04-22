import React, { useState, useRef, useEffect } from "react"
import { useRouter } from 'next/router'
import { useAppContext } from '../context/app-context'
import { patchData } from '../context/apiCalls'

import styles from '../styles/addModuleForm.module.scss'

export default function editModuleForm() {
  const router = useRouter()
  const { sharedState, setSharedState } = useAppContext()
  const { hasBeenUpdated, setHasBeenUpdated } = useAppContext()
  const [ moduleName, setModuleName ] = useState('')
  const [ totalInputMinutes, setTotalInputMinutes ] = useState(0)
  const [ totalInputPercent, setTotalInputPercent ] = useState(0)
  const [ barColor, setBarColor ] = useState('')
  const [ currentCourse, setCurrentCourse ] = useState({})
  let activities = sharedState.activities
  let activityIdAndInput = {}

  const [currentModule, setCurrentModule] = useState({})

  let states = 
    Object.fromEntries(Object.keys(activities).map(key => {
      return [ key, [useState(0), useState('')] ]
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

  const normalizeCircleLabelLength = (label, length) => {
    let string = label.length > 1 ? label : '# of assignments'
    let numSpaces = length - string.length
    let spaces = new Array(numSpaces).fill(' ').join('')
    return string + spaces
  }

  const makeInputs = (activities) => {

    const allInputs = Object.keys(activities).map((key, i) => (
        <div className={styles.inputStyle} key={i}>

          <div className={styles.titleMinutes}>
            <p className={styles.minutesTotal}>
              {states[key][0][0] * activities[key].multiplier}
            </p>
            <p className={styles.title} style={{border: `4px solid ${activities[key].color}`}}>
              {activities[key].name}
            </p>
          </div>

          <label
            className={styles.circleLabel}
            htmlFor={key}
            aria-label={activities[key].name}>
              {normalizeCircleLabelLength(activities[key].metric, 30)}
          </label>
          <input
            style={{border: `10px solid ${activities[key].color}`}}
            className={styles.circleInput}
            value={states[key][0][0]}
            id={activities[key].id}
            type="number"
            min='0'
            onChange={(event) => states[key][0][1](event.target.value)}/>
          <div className={styles.description}>
            {normalizeCircleLabelLength(activities[key].description, 70)}
          </div>

          <label
            className={styles.formLabel}
            htmlFor="notes"
            aria-label="notes">
          </label>
          <textarea
            style={{border: `2px solid ${activities[key].color}`}}
            className={styles.formNotes}
            value={states[key][1][0]}
            name="notes"
            id={i}
            rows="4"
            cols="50"
            onChange={(event) => states[key][1][1](event.target.value)}
          />
        </div>
      )
    )
    return allInputs
  }

  return (
    <div className={styles.moduleForm}>
      <div className={styles.formHeading}>
        <h1 className={styles.formTitle}>
          Add A Module
        </h1>
        <div className={styles.formCourseInfo}>
          <p className={styles.formCourse}>
            Course:
          </p>
          <h2 className={styles.formCourseName}>
            {currentCourse ? currentCourse.name : ''}
          </h2>
        </div>
      </div>

      <form onSubmit={addModule} className={styles.formBody}>

        <div className={styles.moduleInformation}>
          <label
            className={styles.formLabel}
            htmlFor="module-name"
            aria-label="Module Name">
              Module Name:
          </label>
          <input
            className={styles.moduleNameInput}
            id="module-name"
            type="text"
            value={moduleName}
            onChange={(event) => {setModuleName(event.target.value)}}
            required />
        </div>

        <div className={styles.topLabels}>
          <p className={styles.topLabelMinutes}>
            TOTAL MINUTES 
          </p>
          <p className={styles.topLabelInput}>
            INPUT
          </p>
          <p className={styles.topLabelTpT}>
            TIME PER TASK
          </p>
          <p className={styles.topLabelNotes}>
            NOTES
          </p>
        </div>

        {makeInputs(activities)}

        <button
          className={styles.submitButton}
          type="submit">
            Add Edits
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