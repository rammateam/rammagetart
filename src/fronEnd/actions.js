const getImages = (cb) => {
  fetch('/images', {
      method: 'GET'
    })
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      cb(response)
    }).catch((error) => {
    })
}
export default getImages;
