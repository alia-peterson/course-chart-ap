import { createContext, useContext, useState, useEffect } from 'react';
import mockData from './mock-data';
import { getData, postData } from './apiCalls';

const AppContext = createContext();

export function AppWrapper({ children }) {
    // Possibly necessary to wrap allCourses in a useEffect() with an [] as parameter
    // const allCourses = Promise.resolve(getData('courses'))
    //     .then(data => {
    //         const courseInfo = data.data.map(course => getData(`courses/${course.id}`))
    //         Promise.all(courseInfo)
    //             .then(data => data)
    //     })
    const [sharedState, setSharedState] = useState({})

    useEffect( async () => {
        let allCourses;
        let allCourseModules;
        let promises;
        const data = await Promise.resolve(getData('courses'))
            .then(courses => {
                let cow;
                allCourses = courses.data;
                console.log(allCourses)
                promises = allCourses.map(course => {
                    return getData(`courses/${course.id}`)
                        .then(courseModules => {
                            return courseModules.data
                        })
                })
                    Promise.all(promises)
                        .then(courses => {
                            allCourseModules = courses
                            console.log(allCourseModules)
                        })
                        .then(() => {
                            cow = { allCourses, allCourseModules }
                        })
                return cow
            })
            console.log('data', data)
            setSharedState( {data} )
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
    const value = { setSharedState, sharedState }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext);
}