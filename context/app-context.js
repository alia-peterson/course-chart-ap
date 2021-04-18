import { createContext, useContext, useState, useEffect } from 'react';
import mockData from './mock-data';
import { getData, postData } from './apiCalls';

const AppContext = createContext();

export function AppWrapper({ children }) {
    const [sharedState, setSharedState] = useState({
        courses: [{
            modules:[]
        }],
        currentCourse: '',
        currentModule: ''
    })

    useEffect( async () => {
        getData('courses')
            .then(courses => {
                setSharedState({ 
                    courses: courses.data 
                })
            })
    }, []);

        
        // console.log(allCourseModules)
    // const post = (postType, postBody) => {
    //     let url = 'https://course-chart-be.herokuapp.com/modules'
    //     if (postType === 'course') {
    //         url = 'https://course-chart-be.herokuapp.com/courses'
    //     }
    //     Promise.resolve(postData(url, postBody)).then(response => {
    //         if (!response) {
    //             return alert(`Sorry, there was an error adding your ${postType}.` )
    //         }
    //         setSharedState(...sharedState, postBody)
    //         // based on the value of postType we add it to the necessary array (maybe spread operator)
    //     })
    // }
    // Cleaning function to assign the null values an empty string ('') for useState()
    const value = { 
        setSharedState, 
        sharedState
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