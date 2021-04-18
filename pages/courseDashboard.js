import React, { useContext, useState, useEffect } from 'react';
import { useAppContext } from '../context/app-context'
import styles from '../styles/Home.module.scss'
import { getData } from '../context/apiCalls';

export default function courseDashboard() {
  const { sharedState, setSharedState } = useAppContext()
  const courseId = sharedState.currentCourse
  const [course, setCourse] = useState({})

  useEffect(() => {
    getData(`courses/${courseId}`)
      .then(courseModules => {
        setCourse(courseModules.data.course)

        setSharedState({
          ...sharedState,
          [courseId]: courseModules.data.course
        })
      })
  }, [])

  return (
    <div>
      <h1>{course.name}</h1>
      <p>{course.name} graphs and shit</p>
    </div>
  )
}
