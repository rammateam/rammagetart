import {URL} from './../../config.js'
const xml2js = require('xml2js');
const parser = new xml2js.Parser();
const getApiData = () => {
  // const xhttp = new XMLHttpRequest();
  // xhttp.onreadystatechange = function() {
  //
  //   if (this.readyState == 4 && this.status == 200) {
  //
  //     const xml = xhttp.responseText;
  //     parser.parseString(xml, (err, result) => {
  //       const url = result.Data.baseImgUrl[0];
  //       const images = result.Data.Images[0].fanart.map((data) => url + data.original[0]._);
  //       console.log(images);
  //     });
  //   }
  // };
  // xhttp.open("GET", URL, true);
  // xhttp.setRequestHeader("Access-Control-Allow-Origin", 'http://thegamesdb.net')
  // xhttp.send();
}
export {
  getApiData
}
