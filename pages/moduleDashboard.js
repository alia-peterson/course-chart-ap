import { useState, useEffect } from "react";
import { useAppContext } from "../context/app-context";
import CircleChart from "../components/CircleChart";
import { calculations } from "../utilities/calculations";
import { deleteData } from '../context/apiCalls'
import { useRouter } from 'next/router'

import styles from "../styles/dashboard.module.scss";

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

  return (
    <>
      {module &&
      <>
        <div className={styles.courseInformation}>
          <h1>{module.name}</h1>
        </div>
        {percentages.length &&
          <div className={styles.chartContainer}>
            <CircleChart data={percentages} />
          </div>
        }
        <button
          onClick={deleteMod}
          className={styles.buttonDelete}
          >
          Delete Module
        </button>
      </>
      }
    </>
  );
}
