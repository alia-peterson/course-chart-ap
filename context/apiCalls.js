// For all courses: endpoint = 'courses'
// For single course: endpoint = 'courses/:id'
// For single module: endpoint = 'modules/:id'
export const getData =  (endpoint) => {
    // const settings = {mode: 'no-cors'}
    return fetch(`https://course-chart-be.herokuapp.com/${endpoint}`)
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText)
            }
            return response.json()
        })
        .catch(error => console.error(error))
}

export const postData = (postUrl, postBody) => {
    const settings = {
        method: 'POST', 
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(postBody)
    }
    console.log('INPOST', settings)
    
    return fetch(postUrl, settings)
        .then(response => {
            console.log('SERVER RESPONSE', response.statusText)
            if (!response.ok) {
                throw Error(response.statusText)
            }
            return response.json()
        })
        .catch(error => console.error(error))
}