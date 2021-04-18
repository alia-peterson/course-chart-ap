import React, { useContext, useState, useEffect } from 'react'
import { useAppContext } from '../context/app-context'

import styles from '../styles/Home.module.scss'

export default function moduleDashboard() {
  const { sharedState, setSharedState } = useAppContext()
  const [module, setModule] = useState({})

  useEffect(() => {
    setModule(sharedState[sharedState.currentCourse].modules.find(mod => {
      return mod.id === sharedState.currentModule
    }))
  }, [])

  return (
    <div>{module.name}</div>
  )
}
