import React, { useContext, useState, useEffect } from "react";
import { useAppContext } from "../context/app-context";
import CircleChart from "../components/CircleChart";
import { calculations } from "../utilities/calculations";
import { deleteData } from '../context/apiCalls'
import { useRouter } from 'next/router'

import styles from "../styles/Home.module.scss";

export default function moduleDashboard() {
  const { sharedState, setSharedState, hasBeenDeleted, setHasBeenDeleted, hasBeenUpdated } = useAppContext();
  const [module, setModule] = useState({});
  const [percentages, setPercentages] = useState([]);
 
  const router = useRouter()

  useEffect(() => {
    if (sharedState[sharedState.currentCourse]) {
      console.log('Are you in here?')
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
        console.log('Mod activ', moduleActivities)
        const activityPercentages = calculations.getModulePercentages(moduleActivities);
        console.log('ACTIVITY %', activityPercentages)
        setPercentages(activityPercentages)
      }
    }
  }, [hasBeenDeleted, sharedState.currentModule, hasBeenUpdated]);

  const deleteMod = () => {
    if (confirm('Are you sure you\'d like to delete this module?')) {
      deleteData('module', sharedState.currentModule)
      setHasBeenDeleted(!hasBeenDeleted)
      router.push('/courseDashboard')
    }
  }
  
  return (
    <div>
      {module &&
      <>
        <h1>{module.name}</h1>
        {percentages.length && 
        <CircleChart data={percentages} view={'Module'}/>}
        <button onClick={deleteMod}>Delete Module</button>
      </>
      } 
    </div>
  );
}
