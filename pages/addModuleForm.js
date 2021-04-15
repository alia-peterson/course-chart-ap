import React, { useState, useRef } from "react";
import { useAppContext } from '../context/app-context'
import {activities} from '../context/activities'

export default function addModuleForm() {
  const { sharedState, setSharedState } = useAppContext()
  const course = useRef('')
  const moduleName = useRef('')
  const description = useRef('')

  const refs = 
    Object.fromEntries(Object.keys(activities).map(key => {
      return [key, useState(0)]
    }))

  //we need to figure out how to default/grab this chosen course to enable us to find the right hours per week to show the user as they're seeing the inputs and totals
  // const chosenCourse = sharedState.courses.find(c => c.name === course)
  // const [timeMeter, setTimeMeter] = useState(chosenCourse.creditHours)

  // const courses = sharedState.courses.map((course, i) => {
  //   return (
  //     <option value={course} >
  //       {course.name}
  //     </option>
  //   )
  // })

  const addModule = event => {
    event.preventDefault()

    const modulePost = {
      id: Date.now(),
      course: chosesCourse,
      number: chosenCourse.modules.length,
      ...refs
    }
    console.log('MODULEPOST', modulePost)

    alert('Module Added!')
  }

  const makeInputs = (activities) => {
    
    const allInputs = Object.keys(activities).map(key => (
        <div className="inputStyle">
          <div className="titleMinutes">
            <p className="minutesTotal">{refs[key][0] * activities[key].multiplier}</p>
            <p className="title">{activities[key].name}</p>
          </div>
          <label className="circleLabel" htmlFor={key} aria-label={activities[key].name}>{activities[key].metric}</label>
          <input className="circleInput" value={refs[key][0]} id={activities[key].id} type="number" onChange={(event) => refs[key][1](event.target.value)}/>
          <div className="description">
            <p>{activities[key].description}</p>
          </div>
          <style jsx>{`
          .inputStyle {
            display: flex;
            flex-direction: row;
            margin-bottom: 2rem;
            z-index: 1;
            align-items: baseline;
            
          }
          .titleMinutes {
            display: flex;
            flex-direction: row;
            width: 40%;
            height: 4rem;
            text-align: center;
          }
          .title {
            height: 100%;
            width: 20rem;
            border: 2px solid #1A3D59;
            padding: 2.5rem 2rem 0rem 2rem;
            text-align: center;
            margin: 0.7rem 4rem 3rem -2rem;
            font-weight: bold;
            padding: 1rem;
            margin: 2.5rem 4rem 5rem -2rem;
            word-break: break-word;
          }
          .minutesTotal {
            height: 100%;
            width: 5rem;
            background-color: #E6E6E6;
            padding: 1rem;
            text-align: center;
            margin: 2.5rem 2rem 5rem 2rem
          }
          .circleLabel {
            width: 15%;
            padding-left: 2rem;
            background-color: #E6E6E6;
            height: 2rem;
          }
          .circleInput {
            padding: 1.5rem;
            width: 8rem;
            height: 8rem;
            border: 7px solid #1A3D59;
            border-radius: 70px;
            font-size: large;
            z-index: 2;
          }
          .description {
            background-color: #E6E6E6;
            width: 40%;
            height: 4rem;
            text-align: center;
            position: relative;
            padding-left: 3rem;
            z-index: 1;
            left: -2rem;
            bottom: .5rem;
          }
        `}</style>
        </div>
      )
    )
    return allInputs
  }
  
  return (
    <>
      <h1>Add A Module</h1>

      <form onSubmit={addModule}>
        <div className="moduleMetaData">
          <label htmlFor="course" aria-label="Course">Course:</label>
          <select ref={course} id="course">
            <option value="">--Please choose an option--</option>
            {/*{courses}*/}
          </select>

          <label htmlFor="module-name" aria-label="Module Name">Module  Name</label>
          <input ref={moduleName} id="module-name" type="text" required/>

          <label htmlFor="description"  aria-label="description">Description</label>
          <input ref={description} id="description" type="text"/>

          <style jsx>{`
            .moduleMetaData {
              display: flex;
              flex-flow: column;
              width: 50%;
              margin-left: 25%;
            }
            input, select, label {
              padding: .5rem;
            }
            label {
              padding-top: 1rem;
              padding-right: 2rem;
            }
          `}</style>
        </div>
        
      <div className="timeBar">
        <p className="timeLabel">Total Recommended Time per Week: {10}</p>
        <div className="timeMeter">
          <div className="timeUsed" ></div>
          
      </div>
      <style jsx>{`
          .timeBar {
            text-align: center;
            margin-top: 3rem;
          }
            .timeMeter {
              height: 1rem; 
              background-color: #E6E6E6;
              border: 2px solid #1A3D59;
              margin-bottom: 2rem;
              z-index: 1;
              margin-top: 1rem;
            }
            .timeUsed {
              width: 50%;
              height: 100%;
              z-index: 2;
              background-color: #FAC70F;
            }
          `}</style>
      </div>

      <div className="topLabels" >
        <p className="topLabelMinutes">Total Minutes</p>
        <p className="topLabelInput">INPUT 🖊</p>
        <p>Time Per Task</p>
        <style jsx>{`
          .topLabels {
            display: flex;
            flex-direction: row;
            margin-left: 5%;
          }
          .topLabelMinutes {
            margin-right: 28rem;
          }
          .topLabelInput {
            margin-right: 8rem;
          }
        `}</style>
      </div>

        {makeInputs(activities)}
        
      </form>
      </>
  )
}