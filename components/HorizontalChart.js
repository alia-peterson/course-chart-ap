import { useState, useEffect } from 'react'
import { useAppContext } from '../context/app-context'
import calculations from '../utilities/calculations'

import styles from '../styles/HorizontalChart.module.scss'

export default function HorizontalChart({ activities }) {
  // const { sharedState, setSharedState } = useAppContext()
  // const { courseActivities, setCourseActivities } = useState({})

  const moduleActivities = activities.reduce((acc, curr) => {
    const activity = {
      moduleName: curr.moduleName,
      activityName: curr.activityName,
      minutes: curr.minutes
    }

    if (acc[curr.moduleId]) {
      acc[curr.moduleId].push(activity)

    } else {
      acc[curr.moduleId] = [activity]
    }

    return acc
  }, {})

  const chartComponent = Object.keys(moduleActivities).map((module, i) => {
    const totalMinsPerModule = moduleActivities[module].reduce((total, entry) => {
      return total + Object.values(entry)[2]
    }, 0)

    const activities = moduleActivities[module].map((mod, j) => {
      const styleObject = {
        "width" : `${mod.minutes / totalMinsPerModule * 100}%`
      }

      return (
        <div
          key={j}
          className={styles.rUnderstand}
          id={mod.activityName}
          style={styleObject}
          >
        </div>
      )
    })

    return (
      <div key={i} className={styles.container}>
        <p>Module 1: {moduleActivities[module][0].moduleName}</p>
        <div className={styles.graph}>{activities}</div>
      </div>
    )
  })

  return (
    <div>{chartComponent}</div>
  )
}
