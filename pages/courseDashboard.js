import React, { useContext, useState, useEffect } from 'react'
import { useAppContext } from '../context/app-context'
import { getData } from '../context/apiCalls'
import { calculations } from '../utilities/calculations'

import styles from '../styles/Home.module.scss'

export default function courseDashboard() {
  const { sharedState, setSharedState } = useAppContext()
  const courseId = sharedState.currentCourse
  const [course, setCourse] = useState({})
  const [activityTotals, setActivityTotals] = useState({})
  const [percentageByMod, setPercentageByMod] = useState([])
  const [percentageByActivity, setPercentageByActivity] = useState([])

  useEffect(() => {
    getData(`courses/${courseId}`)
      .then(courseModules => {
        setCourse(courseModules.data.course)
        setActivityTotals(courseModules.data.activityTotals)
        setPercentageByMod(calculations.getPercentages(courseModules.data.activityTotals))
        setPercentageByActivity(calculations.getPercentages(courseModules.data.activityTotals, 'activity'))

        setSharedState({
          ...sharedState,
          [courseId]: courseModules.data.course
        })
      })
  }, [])

  return (
    <div>
      <h1>{course.name}</h1>
      <p>graphs!</p>
    </div>
  )
}
