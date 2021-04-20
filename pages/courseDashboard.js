import React, { useContext, useState, useEffect } from 'react'
import { useAppContext } from '../context/app-context'
import { getData } from '../context/apiCalls'
import { calculations } from '../utilities/calculations'

import HorizontalChart from '../components/HorizontalChart'

import styles from '../styles/Home.module.scss'

export default function courseDashboard() {
  const { sharedState, setSharedState } = useAppContext()
  const courseId = sharedState.currentCourse
  const [course, setCourse] = useState({})
  const [activityTotals, setActivityTotals] = useState([])
  // const [percentageByMod, setPercentageByMod] = useState([])
  const [percentageByActivity, setPercentageByActivity] = useState([])

  useEffect(() => {
    getData(`courses/${courseId}`)
      .then(courseModules => {
        setCourse(courseModules.data.course)
        setActivityTotals(courseModules.data.activityTotals)
        // setPercentageByMod(calculations.getPercentages(courseModules.data.activityTotals))
        setPercentageByActivity(calculations.getPercentages(courseModules.data.activityTotals, 'activity'))

        setSharedState({
          ...sharedState,
          [courseId]: courseModules.data.course
        })
      })
  }, [])

  return (
    <>
      <h1>{course.name}</h1>
      <h2>Activities Per Module</h2>

      {activityTotals.length > 0 &&
        <HorizontalChart activities={activityTotals} />
      }
    </>
  )
}
