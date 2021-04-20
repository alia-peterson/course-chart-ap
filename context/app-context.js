import { createContext, useContext, useState, useEffect } from 'react';
import mockData from './mock-data';
import { getData } from './apiCalls';

const AppContext = createContext();

export function AppWrapper({ children }) {
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
        const courses = await getData('courses')
        const activities = await getData('activities')
        setSharedState({
            ...sharedState,
            courses: courses.data,
            activities: activities.data
        })
    }, []);

    const value = {
        setSharedState,
        sharedState,
        hasBeenDeleted,
        setHasBeenDeleted
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
