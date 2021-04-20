import React, { useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAppContext } from '../context/app-context'
import { getData, deleteData } from '../context/apiCalls'
import { calculations } from '../utilities/calculations'
import BarChart from '../components/BarChart'
import CircleChart from '../components/CircleChart'

import HorizontalChart from '../components/HorizontalChart'

import styles from '../styles/Home.module.scss'

export default function courseDashboard() {
  const { sharedState, setSharedState, hasBeenDeleted} = useAppContext()
  const courseId = sharedState.currentCourse
  const [course, setCourse] = useState({})
  const [activityTotals, setActivityTotals] = useState({})
  const [courseActivityPercentages, setCourseActivityPercentages] = useState([])
  const router = useRouter()
  
  const [activityTotals, setActivityTotals] = useState([])
  const [percentageByActivity, setPercentageByActivity] = useState([])

  useEffect(() => {
    getData(`courses/${courseId}`)
      .then(courseModules => {
        setCourse(courseModules.data.course)
        const percentages = calculations.getPercentages(courseModules.data.activityTotals, sharedState.activities)
        setCourseActivityPercentages(percentages)
        setActivityTotals(courseModules.data.activityTotals)
        setPercentageByActivity(calculations.getPercentages(courseModules.data.activityTotals, 'activity'))

        setSharedState({
          ...sharedState,
          [courseId]: courseModules.data.course,
          currentCourseActivityTotals: courseModules.data.activityTotals
        })
      })
  }, [hasBeenDeleted])

  const deleteCourse = () => {
    if (confirm('Are you sure you\'d like to delete this course?')) {
      deleteData('course', sharedState.currentCourse)
      sharedState[sharedState.currentCourse].modules
      router.push('/')
    }
  }

  return (
    <>
    <div>
      <h1>{course.name}</h1>
      <p>graphs!</p>
      {courseActivityPercentages.length && 
        <CircleChart data={courseActivityPercentages}/>}
      {course.name && sharedState.currentCourseActivityTotals !== null  && <
        BarChart 
        course={course} 
        activityTotals={sharedState.currentCourseActivityTotals}
      />}
      <button onClick={deleteCourse}>Delete Course</button>
    </div>
      <>
      <h2>Activities Per Module</h2>
      {activityTotals.length > 0 &&
        <HorizontalChart activities={activityTotals} />
      }
      </>
    </>
  )
}
