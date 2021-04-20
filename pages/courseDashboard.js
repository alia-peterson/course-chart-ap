import React, { useContext, useState, useEffect } from 'react'
import { useAppContext } from '../context/app-context'
import { getData } from '../context/apiCalls'
import { calculations } from '../utilities/calculations'
import BarChart from '../components/BarChart'

import styles from '../styles/Home.module.scss'

export default function courseDashboard() {
  const { sharedState, setSharedState } = useAppContext()
  const courseId = sharedState.currentCourse
  const [course, setCourse] = useState({})
  const [activityTotals, setActivityTotals] = useState([])
  const [percentageByMod, setPercentageByMod] = useState([])
  const [percentageByActivity, setPercentageByActivity] = useState([])

  useEffect(() => {
    getData(`courses/${courseId}`)
      .then(courseModules => {
        if(courseModules) {
          setCourse(courseModules.data.course)
          setActivityTotals(courseModules.data.activityTotals)
          if(courseModules.data.activityTotals !== null) {
            setPercentageByMod(calculations.getPercentages(courseModules.data.activityTotals))
            setPercentageByActivity(calculations.getPercentages(courseModules.data.activityTotals, 'activity'))
          }
          setSharedState({
            ...sharedState,
            [courseId]: courseModules.data.course
          })
        } 
      })
      
  }, [sharedState.currentCourse])

  return (
    <div>
      <h1>{course.name}</h1>
      <p>graphs!</p>
      {course.name && activityTotals !== null && <
        BarChart 
        course={course} 
        activityTotals={activityTotals}
      />}
    </div>
  )
}
