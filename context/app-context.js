import { createContext, useContext, useState, useEffect } from 'react';
import mockData from './mock-data';
import { getData } from './apiCalls';
import data from './mock-data';

const AppContext = createContext();

export function AppWrapper({ children }) {
    const [hasBeenUpdated, setHasBeenUpdated] = useState(false)
    const [sharedState, setSharedState] = useState({
        courses: [{
            modules:[]
        }],
        currentCourse: '',
        currentModule: '',
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
    }, [hasBeenUpdated]);

    const value = {
        setSharedState,
        sharedState,
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
