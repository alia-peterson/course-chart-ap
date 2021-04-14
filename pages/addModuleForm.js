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
        
        {/*makeInputs(activities)*/}

        <label htmlFor="module-name" aria-label="Module Name">Module Name</label>
        <input ref={moduleName} id="module-name" type="text" required/>

        <label htmlFor="description" aria-label="description">Description</label>
        <input ref={description} id="description" type="text"/>

        <div className="totalMinutes">
          <p>Total Minutes {activities["readingUnderstand"].name}: {readingUnderstand * activities["readingUnderstand"].multiplier}</p>
        </div>

        <label htmlFor="reading-understand" aria-label="reading understand">{activities["readingUnderstand"].metric}</label>
        <input ref={readingUnderstand} id="readingUnderstand" type="text" />

        <div></div>
        <div className="description">{description}</div>

        <div className="totalMinutes">
          <p>Total Minutes {activities["readingStudyGuide"].name}: {readingStudyGuide * activities["readingStudyGuide"].multiplier}</p>
        </div>

        <label htmlFor="reading-StudyGuide" aria-label="reading study guide">{activities["readingStudyGuide"].metric}</label>
        <input ref={readingStudyGuide} id="readingStudyGuide" type="text" />

        <div className="totalMinutes">
          <p>Total Minutes {activities["writingReflection"].name}: {writingReflection * activities["writingReflection"].multiplier}</p>
        </div>

        <label htmlFor="writingReflection" aria-label="writing reflection">{activities["writingReflection"].metric}</label>
        <input ref={writingReflection} id="writingReflection" type="text" />

        <div className="totalMinutes">
          <p>Total Minutes {activities["writingResearch"].name}: {writingResearch * activities["writingResearch"].multiplier}</p>
        </div>

        <label htmlFor="writingResearch" aria-label="writing research">{activities["writingResearch"].metric}</label>
        <input ref={writingResearch} id="writingResearch" type="text" />

        <div className="totalMinutes">
          <p>Total Minutes {activities["learningObjectMatching"].name}: {learningObjectMatching * activities["learningObjectMatching"].multiplier}</p>
        </div>

        <label htmlFor="learningObjectMatching" aria-label="learning object matching">{activities["learningObjectMatching"].metric}</label>
        <input ref={learningObjectMatching} id="learningObjectMatching" type="text" />

        <div className="totalMinutes">
          <p>Total Minutes {activities["learningObjectCaseStudy"].name}: {learningObjectCaseStudy * activities["learningObjectCaseStudy"].multiplier}</p>
        </div>

        <label htmlFor="learningObjectCaseStudy" aria-label="learning Object case study">{activities["learningObjectCaseStudy"].metric}</label>
        <input ref={learningObjectCaseStudy} id="learningObjectCaseStudy" type="text" />

        <div className="totalMinutes">
          <p>Total Minutes {activities["lecture"].name}: {lecture * activities["lecture"].multiplier}</p>
        </div>

        <label htmlFor="lecture" aria-label="lecture">{activities["lecture"].metric}</label>
        <input ref={lecture} id="lecture" type="text" />

        <div className="totalMinutes">
          <p>Total Minutes {activities["videos"].name}: {videos * activities["videos"].multiplier}</p>
        </div>

        <label htmlFor="videos" aria-label="videos">{activities["videos"].metric}</label>
        <input ref={videos} id="videos" type="text" />

        <div className="totalMinutes">
          <p>Total Minutes {activities["websites"].name}: {websites * activities["websites"].multiplier}</p>
        </div>

        <label htmlFor="websites" aria-label="websites">{activities["websites"].metric}</label>
        <input ref={websites} id="websites" type="text" />

        <div className="totalMinutes">
          <p>Total Minutes {activities["discussionBoards"].name}: {discussionBoards * activities["discussionBoards"].multiplier}</p>
        </div>

        <label htmlFor="discussionBoards" aria-label="discussion boards">{activities["discussionBoards"].metric}</label>
        <input ref={discussionBoards} id="discussionBoards" type="text" />

        <div className="totalMinutes">
          <p>Total Minutes {activities["quizzes"].name}: {quizzes * activities["quizzes"].multiplier}</p>
        </div>

        <label htmlFor="quizzes" aria-label="quizzes">{activities["quizzes"].metric}</label>
        <input ref={quizzes} id="quizzes" type="text" />

        <div className="totalMinutes">
          <p>Total Minutes {activities["exam"].name}: {exam * activities["exam"].multiplier}</p>
        </div>

        <label htmlFor="exam" aria-label="exam">{activities["exam"].metric}</label>
        <input ref={exam} id="exam" type="text" />

        <div className="totalMinutes">
          <p>Total Minutes {activities["selfAssessments"].name}: {selfAssessments * activities["selfAssessments"].multiplier}</p>
        </div>

        <label htmlFor="selfAssessments" aria-label="self assessments">{activities["selfAssessments"].metric}</label>
        <input ref={selfAssessments} id="selfAssessments" type="text" />

        <div className="totalMinutes">
          <p>Total Minutes {activities["miscellaneous"].name}: {miscellaneous * activities["miscellaneous"].multiplier}</p>
        </div>

        <label htmlFor="miscellaneous" aria-label="miscellaneous">{activities["miscellaneous"].metric}</label>
        <input ref={miscellaneous} id="writingResearch" type="text" />

        <button type="submit">Add Module</button>
      </form>
      </>
  )
}