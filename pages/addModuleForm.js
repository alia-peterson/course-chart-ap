import React, { useState, useRef, useEffect } from "react";
import { useAppContext } from '../context/app-context'
import styles from '../styles/addModuleForm.module.scss'

export default function addModuleForm() {
  const { sharedState, setSharedState } = useAppContext()
  const moduleName = useRef('')
  const [totalHours, setTotalHours] = useState(0)
  // const [inputTotal, inputTotal] = useState(0)
  const currentCourse = sharedState[sharedState.currentCourse]
  const activities =  sharedState.activities
  

  const calculateGoalMinutesRange = () => {
    const splitString = currentCourse.goal.replace(' hours', '').split('-')
    const makeMinutes = num => {
      return parseInt(num)*60
    }
    return [makeMinutes(splitString[0]), makeMinutes(splitString[1])]
  }

  const [courseGoalMinutesMin, courseGoalMinutesMax] = calculateGoalMinutesRange()
  console.log(courseGoalMinutesMin, courseGoalMinutesMax)
  // useEffect(() => {
  //   const courseGoalHours = sharedState.courses[sharedState.currentCourse].goal ? parseInt(sharedState.courses[sharedState.currentCourse].goal) : 0
  //   setTotalHours(courseGoalHours)
  // }, [])

  const states = 
    Object.fromEntries(Object.keys(activities).map(key => {
      return [key, useState(0)]
    }))

    
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


  const addModule = event => {
    event.preventDefault()

    const modulePost = {
      name: moduleName,
      courseId: currentCourse.id,
      number: currentCourse.modules.length,
      moduleActivities: [
      ...Object.values(states).map(activity => {
        return {
            input: activity[0].input,
            notes: activity[0].notes,
            activityId: activity[0].id
          }
      })
      ]
    }
    console.log('MODULEPOST', Object.values(states).map(activity => activity))

    alert('Module Added!')
  }

  const makeInputs = (activities) => {
    
    const allInputs = Object.keys(activities).map(key => (
        <div className={styles.inputStyle}>

          <div className={styles.titleMinutes}>
            <p className={styles.minutesTotal}>
              {states[key][0] * activities[key].multiplier}
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
            value={states[key][0]} 
            id={activities[key].id} 
            type="number" 
            onChange={(event) => states[key][1](event.target.value)}/>
          <div className={styles.description}>
            <p>{activities[key].description}</p>
          </div>

          <label 
            className={styles.formLabel} 
            htmlFor="notes"  
            aria-label="notes">
              Notes
          </label>
          <textarea
            className={styles.formInput} 
            value={states[key][0]}
            id="notes" 
            rows="4" 
            cols="50"
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
          <p>Time Per Task</p>
        </div>

        {makeInputs(activities)}
        
        <button 
          className={styles.submitButton} 
          type="submit">
            Add Module
        </button>
      </form>
  
      {/* <div className={styles.timeBar}>
        <p className={styles.timeLabel}>
          Total Recommended Time per Week: {currentCourse ? currentCourse.goal : ''}
        </p>
        <div className={styles.timeMeter}>
          <div className={styles.timeUsed} >
          </div>
        </div>
      </div> */}

      </div>
  )
}