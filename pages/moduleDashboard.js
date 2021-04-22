import { useState, useEffect } from "react";
import { useAppContext } from "../context/app-context";
import CircleChart from "../components/CircleChart";
import { calculations } from "../utilities/calculations";
import { deleteData } from '../context/apiCalls'
import { useRouter } from 'next/router'

import styles from "../styles/moduleDashboard.module.scss";

export default function moduleDashboard() {
  const { sharedState, setSharedState, hasBeenUpdated, setHasBeenUpdated } = useAppContext();
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
    } else {
      router.push('/')
    }
  }, [sharedState.currentModule, hasBeenUpdated]);

  const deleteMod = () => {
    if (confirm('Are you sure you\'d like to delete this module?')) {
      deleteData('module', sharedState.currentModule)
        .then(() => {
          setSharedState({
            ...sharedState,
            currentModule: ''
          })
          setHasBeenUpdated(!hasBeenUpdated)
          router.push('/courseDashboard')
        })
      }
  }

  const sortActivities = activities => {
    return activities.sort((a,b) => {
      return a.notes.length - b.notes.length
    })
  }
  const activityInputs = (activities) => {
    const sortedActivities = sortActivities(activities)
    return sortedActivities.map(activity => {
      const input = activity.input
      const metric = activity.activity.metric ? activity.activity.metric.split(' ')[2] : 'assignments'
      const name = activity.activity.name
      const minutes = activity.activity.multiplier * input
      const notes = activity.notes
      const description = activity.description
      const color = sharedState.activities[activity.activity.id] ? sharedState.activities[(activity.activity.id - 1)].color : 'blue'
      return (
        <div className={styles.moduleActivityInputs}>
          <div className={styles.moduleActivityInputsCircles} style={{border: `7px solid ${color}`}}>
            <p>{input}</p>
            <p className={styles.moduleMetric}>{metric}</p>
          </div>
          <section className={styles.moduleActivitySideInfo}>
            <div className={styles.moduleActivityNameNotes}>
              <p className={styles.moduleActivityName} style={{backgroundColor: `${color}`, color: `white`}}>{name}</p>
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
    <>
      {module && module.moduleActivities &&
      <>
        <div className={styles.moduleHeader}>
          <h1 className={styles.moduleName}>
            {module.name}
          </h1>
          <div className={styles.moduleTimeInfo}>
            <p className={styles.moduleTotal}>
              Total Minutes Assigned:
            </p>
            <h2 className={styles.totalModuleMinutes}>{totalMinutesAssigned()}</h2>
          </div>
        </div>
        {percentages.length &&
          <div className={styles.donut}>
            <CircleChart data={percentages} view={'Module'} />
          </div> 
        }
        <div className={styles.moduleActWrapper}>
          {activityInputs(module.moduleActivities)}
        </div>
          <div className={styles.buttons}>
            <button className={styles.editButton} onClick={editMod}>Edit Module</button>
            <button className={styles.deleteButton} onClick={deleteMod}>Delete Module</button>
          </div>
      </>
      }
    </>
  );
}
