import {URL} from './../../config.js'
// const xml2js = require('xml2js');
const parser = new xml2js.Parser();
const request = require('request');
request('http://thegamesdb.net/api/GetArt.php?id=2', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

const getApiData=body;
  export {
    getApiData
  }

});

// const getApiData = () => {
//   const xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       const xml = xhttp.responseText;
//       parser.parseString(xml, (err, result) => {
//         const url = result.Data.baseImgUrl[0];
//         const images = result.Data.Images[0].fanart.map((data) => url + data.original[0]._);
//         console.log(images);
//       });
//     }
//   };
//   xhttp.open("GET", URL, true);
//   xhttp.send();
// }
