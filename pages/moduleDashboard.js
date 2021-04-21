import React, { useContext, useState, useEffect } from "react";
import { useAppContext } from "../context/app-context";
import CircleChart from "../components/CircleChart";
import { calculations } from "../utilities/calculations";
import { deleteData } from '../context/apiCalls'
import { useRouter } from 'next/router'

import styles from "../styles/moduleDashboard.module.scss";
import { activities } from "../context/activities";
import courseDashboard from "./courseDashboard";

export default function moduleDashboard() {
  const { sharedState, setSharedState, setHasBeenUpdated, hasBeenUpdated } = useAppContext();
  const [module, setModule] = useState({});
  const [percentages, setPercentages] = useState([]);
 
  const router = useRouter()

  useEffect(() => {
    if (sharedState[sharedState.currentCourse]) {
      const module = sharedState[sharedState.currentCourse].modules.find(
        (mod) => {
          return mod.id === parseInt(sharedState.currentModule);
        }
      );
      setModule(module);
      if (module) {
        const moduleActivities = calculations.filterModuleActivities(
          sharedState.currentCourseActivityTotals,
          sharedState.currentModule
        );
 
        const activityPercentages = calculations.getModulePercentages(moduleActivities);
        setPercentages(activityPercentages)
      }
    }
  }, [sharedState.currentModule, hasBeenUpdated]);

  const deleteMod = () => {
    if (confirm('Are you sure you\'d like to delete this module?')) {
      deleteData('module', sharedState.currentModule)
      setHasBeenUpdated(!hasBeenUpdated)
      router.push('/courseDashboard')
    }
  }

  const activityInputs = (activities) => {
    return activities.map(activity => {
      const input = activity.input
      const metric = activity.activity.metric ? activity.activity.metric.split(' ')[2] : 'assignments'
      const name = activity.activity.name
      const minutes = activity.activity.multiplier * input
      const notes = activity.notes
      const description = activity.description
      const color = sharedState.activities[activity.activity.id] ? sharedState.activities[activity.activity.id].color : 'blue'
      return (
        <div className={styles.moduleActivityInputs}>
          <div className={styles.moduleActivityInputsCircles} style={{border: `7px solid ${color}`}}>
            <p>{input} {metric}</p>
          </div>
          <section className={styles.moduleActivitySideInfo}>
            <div className={styles.moduleActivityNameNotes}>
              <p style={{backgroundColor: `${color}`, color: `white`}}>{name}</p>
              <p className={styles.moduleNotes}>{notes}</p>
            </div>
            <div className={styles.moduleActivityTimeNotes}>
              <p>{description}</p>
              <p>{minutes} minutes</p>
            </div>
          </section>
        </div>
      )
    })
  }

  const totalMinutesAssigned = () => {
    return module.moduleActivities.reduce((total, activity) => {
      return total + activity.activity.multiplier * activity.input
    }, 0)
  }

  const editMod = () => {
    setSharedState({...sharedState, currentModule: module.id, currentCourse: module.courseId})
    router.push('/editModuleForm')
  }
  
  return (
    <div>
      {module && module.moduleActivities &&
      <>
        <div className={styles.modHeader}>
          <h1>{module.name}</h1>
          <h4>Total Minutes Assigned</h4>
          <p className={styles.totalModuleMinutes}>{totalMinutesAssigned()}</p>
        </div>
        {percentages.length && 
          <CircleChart data={percentages} />}
          {activityInputs(module.moduleActivities)}
          <div className={styles.buttons}>
            <button className={styles.editButton} onClick={editMod}>Edit Module</button>
            <button className={styles.deleteButton} onClick={deleteMod}>Delete Module</button>
          </div>
      </>
      } 
    </div>
  );
}
