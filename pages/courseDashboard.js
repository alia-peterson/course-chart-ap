import React, { useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAppContext } from '../context/app-context'
import { getData, deleteData } from '../context/apiCalls'
import { calculations } from '../utilities/calculations'
import BarChart from '../components/BarChart'
import CircleChart from '../components/CircleChart'

import HorizontalChart from '../components/HorizontalChart'

import styles from '../styles/courseDashboard.module.scss'

export default function courseDashboard() {
  const { sharedState, setSharedState, hasBeenDeleted} = useAppContext()
  const courseId = sharedState.currentCourse
  const [course, setCourse] = useState({})
  const [activityTotals, setActivityTotals] = useState({})
  const router = useRouter()
  const [courseActivityPercentages, setCourseActivityPercentages] = useState([])

  useEffect(() => {
    getData(`courses/${courseId}`)
      .then(courseModules => {
        if (courseModules) {
        setCourse(courseModules.data.course)
        const percentages = calculations.getActivityPercentages(courseModules.data.activityTotals, sharedState.activities)
        setCourseActivityPercentages(percentages)
        setActivityTotals(courseModules.data.activityTotals)
        // setPercentageByActivity(calculations.getPercentages(courseModules.data.activityTotals, 'activity'))

        setSharedState({
          ...sharedState,
          [courseId]: courseModules.data.course,
          currentCourseActivityTotals: courseModules.data.activityTotals
        })
      }
      })
  }, [hasBeenDeleted, sharedState.currentCourse])

  const deleteCourse = () => {
    if (confirm('Are you sure you\'d like to delete this course?')) {
      deleteData('course', sharedState.currentCourse)
      sharedState[sharedState.currentCourse].modules
      router.push('/')
    }
  }

  return (
    <div>
      <section className={styles.courseMeta}>
        <h1>{course.name}</h1>
        <p>
          Institution: {course.institution}
          <br />
          Credit Hours: {course.creditHours}
          <br />
          Length: {course.length} Weeks
        </p>
      </section>

      <section className={styles.courseGraphs}>
        {courseActivityPercentages.length && 
          <CircleChart data={courseActivityPercentages}/>}

        {activityTotals.length > 0 &&
          <>
            <h2>Activities Per Module</h2>
            <HorizontalChart activities={activityTotals} />
          </>
        }

        {course.name && sharedState.currentCourseActivityTotals !== null && <
          BarChart 
          course={course} 
          activityTotals={sharedState.currentCourseActivityTotals}
        />}
      </section>
      <button onClick={deleteCourse}>Delete Course</button>
    </div>
    
  )
}
