import { createContext, useContext, useState, useEffect } from 'react';
import { getData } from './apiCalls';

const AppContext = createContext();

export function AppWrapper({ children }) {
    const activityColors = [
        "#FF6384",
        "#36A2EB",
        "#FFCE56",
        "#1dea49",
        "#ef1aae",
        "#0b04fa",
        "#9a1aa0",
        "#3f218c",
        "#ebfc05",
        "#42e6d0",
        "#bb0935",
        "#5d9b35",
        '#ffa500',
        '#ff2500'
      ]
    const [hasBeenUpdated, setHasBeenUpdated] = useState(false)
    const [hasBeenDeleted, setHasBeenDeleted] = useState(false)
    const [sharedState, setSharedState] = useState({
        courses: [{
            modules:[]
        }],
        currentCourse: '',
        currentModule: '',
        currentCourseActivityTotals: [],
        activities: []
    })

    useEffect( async () => {
        console.log('TRIGGERD', Date.now(), hasBeenUpdated)
        const courses = await getData('courses')
        const activities = await getData('activities')
        const activitiesWithColor = activities.data.map((activity, i) => {
            return {...activity, color: activityColors[i-1]}
        })
        setSharedState({
            ...sharedState,
            courses: courses.data,
            activities: activitiesWithColor
        })
    }, [hasBeenUpdated, hasBeenDeleted]);

    const value = {
        sharedState,
        setSharedState,
        hasBeenDeleted,
        setHasBeenDeleted, 
        hasBeenUpdated,
        setHasBeenUpdated
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext);
}
