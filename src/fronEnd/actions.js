const getImages = (cb) => {
  fetch('/images', {
      method: 'GET'
    })
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      console.log('response',response);
      cb(response)
    }).catch((error) => {
      console.log('error in fetch', error);
    })
}
export default getImages;
