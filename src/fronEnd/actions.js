import {URL} from './../../config.js'
// const xml2js = require('xml2js');
const parser = new xml2js.Parser();
var myInit = { method: 'GET',
               mode: 'no-cors',
               cache: 'default' };

const ApiData=()=>{
  fetch('https://thegamesdb.net/api/GetArt.php?id=2', myInit).then(function(response) {
    return response.blob();
  }).then(function(myBlob) {
    var objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;

  });
}


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
export {
  getApiData
}
