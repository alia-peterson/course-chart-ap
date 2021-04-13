// For all courses: endpoint = 'courses'
// For single course: endpoint = 'courses/:id'
// For single module: endpoint = 'modules/:id'
export const getData = (endpoint) => {
    return fetch(`https://course-chart-be.herokuapp.com/${endpoint}`)
        .then(response => response.json())
        .catch(error => console.error(error))
}

export const postData = (postUrl, postBody) => {
    const settings = {method: 'POST', body: postBody}
    return fetch(postUrl, settings)
        .then(response => {
            return (response.status() >= 200 && response.status() < 300)
        })
        .catch(error => console.error(error))
}