import { createContext, useContext, useState, useEffect } from 'react';
import { getData } from './apiCalls';

const AppContext = createContext();

export function AppWrapper({ children }) {
    const activityColors = [
        "#8EA604",
        "#36A2EB",
        "#FFCE56",
        "#Fb4D3D",
        "#D90368",
        "#0b04fa",
        "#9a1aa0",
        "#5B59CE",
        "#2C663A",
        "#E65F5C",
        "#BB0000",
        "#5A9C2D",
        '#E9A321',
        '#BF3100'
    ]
    const [hasBeenUpdated, setHasBeenUpdated] = useState(false)
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
        const activitiesWithColor = activities.data.map((activity, i) => {
            return {...activity, color: activityColors[i]}
        })
        const stateCopy = sharedState
        stateCopy.courses = courses.data
        stateCopy.activities = activitiesWithColor
        setSharedState({...stateCopy})
    }, [hasBeenUpdated]);

    const value = {
        sharedState,
        setSharedState,
        hasBeenUpdated,
        setHasBeenUpdated,
        activityColors
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
