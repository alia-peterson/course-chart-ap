import React, { useState, useRef } from "react";
import { useAppContext } from '../context/app-context'
import {activities} from '../context/activities'

export default function addModuleForm() {
  const { sharedState, setSharedState } = useAppContext()
  const course = useRef('')
  const moduleName = useRef('')
  const description = useRef('')
  const readingUnderstand = useRef('')
  const readingStudyGuide = useRef('')
  const writingReflection = useRef('')
  const writingResearch = useRef('')
  const learningObjectMatching = useRef('')
  const learningObjectCaseStudy = useRef('')
  const lecture = useRef('')
  const videos = useRef('')
  const websites = useRef('')
  const discussionBoards = useRef('')
  const quizzes = useRef('')
  const exam = useRef('')
  const selfAssessments = useRef('')
  const miscellaneous = useRef('')

  const refs = ['', readingUnderstand,
    readingStudyGuide,
    writingReflection,
    writingResearch,
    learningObjectMatching,
    learningObjectCaseStudy,
    lecture,
    videos,
    websites,
    discussionBoards,
    quizzes,
    exam,
    selfAssessments,
    miscellaneous]
    // Object.keys(activities).map(key => {
    //   return {[key]: useRef('')}
    // })

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

    alert('Module Added!')
  }

  const makeInputs = (activities) => {
    
    const allInputs = Object.keys(activities).map(key => {
      const name = activities[key].name
      const id = activities[key].id
      const multiplier = activities[key].multiplier
      const metric = activities[key].metric
      const ref = refs[parseInt(id)]
      
      console.log(name, id, multiplier, metric, ref)
      return (
        <>
        <div className="totalMinutes">
          <p>Total Minutes {name}: {ref * multiplier}</p>
        </div>

        <label htmlFor={key} aria-label={name}>{metric}</label>
        <input ref={ref} id={id} type="text" />

        <div></div>
        <div className="description">{description}</div>
        </>
      )
    })

    return allInputs.join(' ')
  }
  
  return (
    <>
      <h1>Add A Module</h1>

      <form onSubmit={addModule}>

        <label htmlFor="course" aria-label="Course">Course:</label>
        <select ref={course} id="course">
          <option value="">--Please choose an option--</option>
          {/*{courses}*/}
        </select>
        
        {makeInputs(activities)}

        <label htmlFor="module-name" aria-label="Module Name">Module Name</label>
        <input ref={moduleName} id="module-name" type="text" required/>

        <label htmlFor="description" aria-label="description">Description</label>
        <input ref={description} id="description" type="text"/>

        <label htmlFor="reading-understand" aria-label="reading understand">{activities["readingUnderstand"].name}</label>
        <input ref={readingUnderstand} id="readingUnderstand" type="text" />

        <label htmlFor="reading-StudyGuide" aria-label="reading study guide">{activities["readingStudyGuide"].name}</label>
        <input ref={readingStudyGuide} id="readingStudyGuide" type="text" />

        <div><p>has shit</p></div>

        <label htmlFor="writingReflection" aria-label="writing reflection">{activities["readingStudyGuide"].name}</label>
        <input ref={writingReflection} id="writingReflection" type="text" />

        <label htmlFor="writingResearch" aria-label="writing research">{activities["readingStudyGuide"].name}</label>
        <input ref={writingResearch} id="writingResearch" type="text" />

        <label htmlFor="learningObjectMatching" aria-label="learning object matching">Reading</label>
        <input ref={learningObjectMatching} id="learningObjectMatching" type="text" />

        <label htmlFor="learningObjectCaseStudy" aria-label="learning Object case study">Reading</label>
        <input ref={learningObjectCaseStudy} id="learningObjectCaseStudy" type="text" />

        <label htmlFor="lecture" aria-label="lecture">Reading</label>
        <input ref={lecture} id="lecture" type="text" />

        <label htmlFor="videos" aria-label="videos">Reading</label>
        <input ref={videos} id="videos" type="text" />

        <label htmlFor="websites" aria-label="websites">Reading</label>
        <input ref={websites} id="websites" type="text" />

        <label htmlFor="discussionBoards" aria-label="discussion boards">Reading</label>
        <input ref={discussionBoards} id="discussionBoards" type="text" />

        <label htmlFor="quizzes" aria-label="quizzes">Reading</label>
        <input ref={quizzes} id="quizzes" type="text" />

        <label htmlFor="exam" aria-label="exam">Reading</label>
        <input ref={exam} id="exam" type="text" />

        <label htmlFor="selfAssessments" aria-label="self assessments">Reading</label>
        <input ref={selfAssessments} id="selfAssessments" type="text" />

        <label htmlFor="miscellaneous" aria-label="miscellaneous">Reading</label>
        <input ref={miscellaneous} id="writingResearch" type="text" />

        <button type="submit">Add Module</button>
      </form>
      </>
  )
}