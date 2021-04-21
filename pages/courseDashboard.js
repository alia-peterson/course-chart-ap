import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAppContext } from '../context/app-context'
import { getData, deleteData } from '../context/apiCalls'
import { calculations } from '../utilities/calculations'
import BarChart from '../components/BarChart'
import CircleChart from '../components/CircleChart'

import HorizontalChart from '../components/HorizontalChart'

import styles from '../styles/dashboard.module.scss'

export default function courseDashboard() {
  const { sharedState, setSharedState, hasBeenUpdated, setHasBeenUpdated } = useAppContext()
  const courseId = sharedState.currentCourse
  const router = useRouter()
  const [course, setCourse] = useState({})
  const [activityTotals, setActivityTotals] = useState({})
  const [courseActivityPercentages, setCourseActivityPercentages] = useState([])

  useEffect(() => {
    if (!sharedState.currentCourse) {
      router.push('/')
    } else {
      getData(`courses/${courseId}`)
        .then(courseModules => {
          if (courseModules) {
            setCourse(courseModules.data.course)
            if (courseModules.data.activityTotals !== null) {
              const percentages = calculations.getActivityPercentages(courseModules.data.   activityTotals, sharedState.activities)
              setCourseActivityPercentages(percentages)
              setActivityTotals(courseModules.data.activityTotals)
              const updatedCourse = courseModules.data.course
              const stateCopy = sharedState
              delete stateCopy[sharedState.currentCourse]
              stateCopy[sharedState.currentCourse] = updatedCourse
              stateCopy.currentCourseActivityTotals = courseModules.data.activityTotals

              setSharedState({
                ...stateCopy
              })

            } else {
              setSharedState({
                ...sharedState,
                [courseId]: courseModules.data.course,
              })
            }
          }
        })
    }
  }, [sharedState.currentCourse, hasBeenUpdated])

  const deleteCourse = () => {
    if (confirm('Are you sure you\'d like to delete this course?')) {
      deleteData('course', sharedState.currentCourse)
        .then(() => {
          setSharedState({
            ...sharedState,
            currentCourse: ''
          })
          setHasBeenUpdated(!hasBeenUpdated)
          router.push('/')
        })
    }
  }

  return (
    <>
      {course &&
      <div className={styles.courseHeader}>
        <section className={styles.courseInformation}>
          <h1 className={styles.courseName}>{course.name}</h1>
          <p className={styles.courseInstitution}>{course.institution}</p>
        </section>
        <div className={styles.courseTimeInformation}>
            <div className={styles.courseTime}>
              <h2>Credit Hours:</h2> 
              <p>{course.creditHours}</p>
            </div>
            <div className={styles.courseTime}>
              <h2>Length:</h2> 
              <p>{course.length} Weeks</p>
            </div>
        </div>
      </div>
      }

      {course.modules &&
        <section className={styles.courseGraphs}>
          {courseActivityPercentages.length > 0 &&
            <div className={styles.donut}>
              <CircleChart data={courseActivityPercentages} view={'Course'}/>
            </div>
          }

          {activityTotals.length &&
            <div className={styles.chartContainer}>
              <h2>Activities Percentages Per Module</h2>
              <HorizontalChart activities={activityTotals} />
            </div>
          }

          {sharedState.currentCourseActivityTotals.length > 0 &&
            <div className={styles.chartContainer}>
              <BarChart
                course={course}
                activityTotals={sharedState.currentCourseActivityTotals}
                />
            </div>
          }
        </section>
      }
      <button onClick={deleteCourse} className={styles.buttonDelete}>Delete Course</button>
    </>
  )
}
