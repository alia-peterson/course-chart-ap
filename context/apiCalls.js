// For all courses: endpoint = 'courses'
// For single course: endpoint = 'courses/:id'
// For single module: endpoint = 'modules/:id'
export const getData = (endpoint) => {
    // const settings = {mode: 'no-cors'}
    return fetch(`https://course-chart-be.herokuapp.com/${endpoint}`)
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText)
            }
            console.log(response)
            return response
        })
        .catch(error => console.error(error))
}

export const postData = (postUrl, postBody) => {
    const settings = {method: 'POST', body: JSON.stringify(postBody)}
    return fetch(postUrl, settings)
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText)
            }
            return response
        })
        .catch(error => console.error(error))
}