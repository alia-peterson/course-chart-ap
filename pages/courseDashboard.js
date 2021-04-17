import React, { useContext } from 'react';
import {useAppContext} from '../context/app-context'
import styles from '../styles/Home.module.scss'

export default function courseDashboard() {
  const { sharedState } = useAppContext()
  console.log(sharedState.allCourses)
  return (
    <div>
      {/* {sharedState.allCourses[0].name} */}
    </div>
  )
}
