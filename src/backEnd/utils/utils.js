const xml2js = require('xml2js');
const { parseString } = require('xml2js');
const axios = require('axios');
var allImages = [];
var filtered =[];

const getImages = (idsArr,cb) => {
  if(filtered.length > 5){
    filtered = [];
  }
  idsArr.map((id) => {
    axios.get(`http://thegamesdb.net/api/GetArt.php?id=${id}`)
    .then((result) => {
      parseString(result.data, (err, result) => {
        const url = result.Data.baseImgUrl[0];
        if (result.Data.Images[0].fanart) {
          const unfilteredImages = allImages.concat(result.Data.Images[0].fanart.map((data) => url + data.original[0]._));
          const choosenImage = randomImage(unfilteredImages);
          filtered.push(choosenImage);
        }
        cb(err,filtered)
      });
    })
    .catch((err) => {
    });
  })
    }

    const randomImage = (unfilteredImages) => {
      const index = (Math.floor(Math.random() * unfilteredImages.length) + 0).toString()
      return unfilteredImages[index];
    }
    const randomArray = () => {
      var randomRequest =[] ;
      for(i = 0; i < 8; i++){
        const id = (Math.floor(Math.random() * 1000) + 1).toString()
        randomRequest.push(id);
      }
      return randomRequest;
    }

module.exports = {
  getImages , randomArray
}
