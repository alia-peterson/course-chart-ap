import React, { useContext, useState, useEffect } from 'react';
import {useAppContext} from '../context/app-context'
import styles from '../styles/Home.module.scss'
import { getData } from '../context/apiCalls';

export default function courseDashboard() {
  const { sharedState } = useAppContext()
  const [courseState, setCourse] = useState({})
  const [activityTotals, setActivityTotals] = useState([{}])

  useEffect(() => {
    const courseId = sharedState.currentCourse
    getData(`courses/${courseId}`)
      .then(courseModules => {
        setCourse(courseModules.data.course)
        setActivityTotals(courseModules.data.activityTotals)
      })
  }, []) 

  return (
    <div>
      <h1>{courseState.name}</h1>
      <p>{courseState.description} grahps and shit</p>
      {activityTotals[0].activityName}
    </div>
  )
}
