export const getData = (endpoint) => {
  // const settings = {mode: 'no-cors'}
  return fetch(`https://course-chart-be.herokuapp.com/${endpoint}`)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .catch((error) => console.error(error));
};

export const postData = (postUrl, postBody) => {
  const settings = { method: "POST", body: JSON.stringify(postBody) };
  return fetch(postUrl, settings)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .catch((error) => console.error(error));
};

export const deleteData = (type, id) => {
  const url =
    type === 'course'
      ? `https://course-chart-be.herokuapp.com/courses/${id}`
      : `https://course-chart-be.herokuapp.com/modules/${id}`;
  const settings = { method: "DELETE" };
  return fetch(url, settings)
    .then((response) => {
        console.log('DELETE API', response)
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.message;
    })
    .catch((error) => console.error(error));
};

export const patchData = (type, body, id) => {
  const url =
    type === 'course'
      ? `https://course-chart-be.herokuapp.com/courses/${id}`
      : `https://course-chart-be.herokuapp.com/modules/${id}`
  const settings = { 
    method: "PATCH", 
    body: JSON.stringify(body) 
  };
  return fetch(url, settings)
  .then((response) => {
      console.log('PATCHRESPONSE', response.status)
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .catch((error) => console.error(error));
}