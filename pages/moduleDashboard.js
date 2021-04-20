import React, { useContext, useState, useEffect } from 'react'
import { useAppContext } from '../context/app-context'

import styles from '../styles/Home.module.scss'

export default function moduleDashboard() {
  const { sharedState, setSharedState } = useAppContext()
  const [module, setModule] = useState({})

  useEffect(() => {
    console.log(sharedState);
    setModule(sharedState[sharedState.currentCourse].modules.find(mod => {
      return mod.id === parseInt(sharedState.currentModule)
    }))
  })

  return (
    <div>
      <h1>hi</h1>
    </div>
  )
}
