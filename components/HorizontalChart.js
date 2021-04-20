import { useState, useEffect } from 'react'
import { useAppContext } from '../context/app-context'
import calculations from '../utilities/calculations'
import getColor from '../utilities/chartColors'

import styles from '../styles/HorizontalChart.module.scss'

export default function HorizontalChart({ activities }) {
  const { activityColors } = useAppContext()

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
      const color = getColor(mod.activityName)
      const styleObject = {
        'backgroundColor': `${color}`,
        'height': '100%',
        'width': `${Math.round(mod.minutes / totalMinsPerModule * 100)}%`
      }

      return (
        <div
          key={j}
          className={styles.box}
          id={mod.activityName}
          style={styleObject}
          >
          <div className={styles.tooltip}>
            {mod.activityName}: {styleObject.width}
          </div>
        </div>
      )
    })

    return (
      <div key={i} className={styles.container}>
        <p>Module Name: {moduleActivities[module][0].moduleName}</p>
        <div className={styles.graph}>{activities}</div>
      </div>
    )
  })

  return (
    <div>{chartComponent}</div>
  )
}
