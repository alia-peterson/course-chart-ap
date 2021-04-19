import React, { useState, useRef, useEffect } from "react";
import { useAppContext } from '../context/app-context'
import { activities } from '../context/activities'
import styles from '../styles/addModuleForm.module.scss'

export default function addModuleForm() {
  const { sharedState, setSharedState } = useAppContext()
  const course = useRef('')
  const moduleName = useRef('')
  const description = useRef('')
  const [totalHours, setTotalHours] = useState(0)
  // const [inputTotal, inputTotal] = useState(0)


  // useEffect(() => {
  //   const courseGoalHours = sharedState.courses[sharedState.currentCourse].goal ? parseInt(sharedState.courses[sharedState.currentCourse].goal) : 0
  //   setTotalHours(courseGoalHours)
  // }, [])

  const states = 
    Object.fromEntries(Object.keys(activities).map(key => {
      return [key, useState(0)]
    }))

  const addModule = event => {
    event.preventDefault()

    const modulePost = {
      id: Date.now(),
      course: chosesCourse,
      number: chosenCourse.modules.length,
      ...states
    }
    console.log('MODULEPOST', modulePost)

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

        </div>
      )
    )
    return allInputs
  }
  
  return (
    <div className={styles.addModuleForm}>
      <h1 className={styles.formPageTitle}>Add A Module</h1>
      <p>
        Course: 
        {sharedState.courses[sharedState.currentCourse].name}
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
            ref={moduleName} 
            id="module-name" 
            type="text" 
            required />

          <label 
            className={styles.formLabel} 
            htmlFor="description"  
            aria-label="description">
              Description
          </label>
          <input 
            className={styles.formInput} 
            ref={description} 
            id="description" 
            type="text"/>

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
        
      </form>
  
      <div className={styles.timeBar}>
        <p className={styles.timeLabel}>
          Total Recommended Time per Week: {10}
        </p>
        <div className={styles.timeMeter}>
          <div className={styles.timeUsed} >
          </div>
        </div>
      </div>

      </div>
  )
}