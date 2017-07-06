const xml2js = require('xml2js');
const { parseString } = require('xml2js');
const axios = require('axios');
const getImages = (id,cb) => {
  axios
     .get(`http://thegamesdb.net/api/GetArt.php?id=${id}`)
     .then((result) => {
       parseString(result.data, (err, result) => {
         cb(err,result)
       });
     })
     .catch((err) => {
       console.log(err);
     });

    }

module.exports = {
  getImages
}