import { createContext, useContext, useState, useEffect } from 'react';
import { getData } from './apiCalls';

const AppContext = createContext();

export function AppWrapper({ children }) {
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
        setSharedState({
            ...sharedState,
            courses: courses.data,
            activities: activities.data
        })
    }, [hasBeenUpdated, hasBeenDeleted]);

    const value = {
        sharedState,
        setSharedState,
        hasBeenDeleted,
        setHasBeenDeleted, 
        hasBeenUpdated,
        setHasBeenUpdate
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
