import React, { useState, useRef, useEffect } from "react";
import { useAppContext } from '../context/app-context'
import styles from '../styles/addModuleForm.module.scss'
import { postData } from '../context/apiCalls';

export default function addModuleForm() {
  const { sharedState, setSharedState } = useAppContext()
  const moduleName = useRef('')
  const [totalInputMinutes, setTotalInputMinutes] = useState(0)
  let currentCourse = sharedState[sharedState.currentCourse]
  let activities = sharedState.activities
  let timeUsed

  const calculateGoalMinutesRange = () => {
    const splitString = currentCourse.goal.replace(' hours', '').split('-')
    const makeMinutes = num => {
      return parseInt(num)*60
    }
    return [makeMinutes(splitString[0]), makeMinutes(splitString[1])]
  }

  const [courseGoalMinutesMin, courseGoalMinutesMax] = calculateGoalMinutesRange()

  const rangeWidth = (min, max) => {
    return ((max - min) / max) *100 + '%'
  }

  let range = rangeWidth(courseGoalMinutesMin, courseGoalMinutesMax)

  const states = 
  Object.fromEntries(Object.keys(activities).map(key => {
    return [key, [useState(0), useState('')] ]
  }))

  useEffect(() => {
    const totalMins = Object.values(states).reduce((total, state, i) => {
      const mins = parseInt(state[0][0]) * activities[i].multiplier
      return total + mins
    }, 0)
    const percentMax = (totalMins/courseGoalMinutesMax) * 100 + '%'
    setTotalInputMinutes(percentMax)
    
  })



    // {
		// 	"name": "Module 9",
		// 	"number": 9,
		// 	"courseId": 1,
		// 	"moduleActivities": [
		// 		{
		// 			"input": 30,
		// 			"notes": "Notes go here",
		// 			"activityId": 1
		// 		},
		// 		{
		// 			"input": 8,
		// 			"notes": "Notes go here",
		// 			"activityId": 2
		// 		},
		// 		{
		// 			"input": 180,
		// 			"notes": "Notes go here",
		// 			"activityId": 3
		// 		}
		// 	]
		// }

    const post = (postType, postBody) => {
        let url = 'https://course-chart-be.herokuapp.com/modules'
    
      Promise.resolve(postData(url, postBody))
        .then(response => {
          if (!response) {
              return alert(`Sorry, there was an error adding your ${postType}.` )
          }
          setSharedState(...sharedState, postBody)
        })
    }

  const addModule = event => {
    event.preventDefault()

    const modulePost = {
      name: moduleName,
      courseId: currentCourse.id,
      number: currentCourse.modules.length,
      moduleActivities: [
      ...Object.values(states).map((activity, i) => {
        return {
            input: activity[0][0],
            notes: activity[1][0],
            activityId: i-1
          }
      })
      ]
    }
    console.log('MODULEPOST', modulePost )

    alert('Module Added!')
  }

  const makeInputs = (activities) => {
    
    const allInputs = Object.keys(activities).map(key => (
        <div className={styles.inputStyle}>

          <div className={styles.titleMinutes}>
            <p className={styles.minutesTotal}>
              {states[key][0][0] * activities[key].multiplier}
            </p>
            <p className={styles.title}>
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
  
  return (
    <div className={styles.addModuleForm}>
      <h1 className={styles.formPageTitle}>Add A Module</h1>
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

        {makeInputs(activities)}
        
        <button 
          className={styles.submitButton} 
          type="submit">
            Add Module
        </button>
      </form>
  
      <div className={styles.timeBar}>

        <p className={styles.timeLabel}>
          Total Recommended Time per Week: {currentCourse ? currentCourse.goal : ''}
        </p>

        <div className={styles.timeMeter}>
          <div className={styles.range} style={{width: `${range}`}} ></div>
          <div className={styles.timeUsed} style={{width: `${totalInputMinutes}`}} ></div>
        </div>

      </div>

      </div>
  )
}