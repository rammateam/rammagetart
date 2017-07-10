const getImages = (cb) => {
  fetch('/images', {
      method: 'GET'
    })
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      console.log(response);
      response.splice(0,0,localStorage.getItem('initialPhoto'));
      console.log(response);
      cb(response)
    }).catch((error) => {
    })
}
export default getImages;
