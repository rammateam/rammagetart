const xml2js = require('xml2js');
const parser = new xml2js.Parser();
import  store from './store.js';
const getApiData = (cb) => {
  var id = Math.floor(Math.random() * 10000) + 1 ;
  var images;
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const xml = xhttp.responseText;
      parser.parseString(xml, (err, result) => {
        const url = result.Data.baseImgUrl[0];
        if(result.Data.Images[0].fanart){
          // if(Object.keys(result.Data.Images[0].fanart).length < 5){
          //   getApiData()
          //   // console.log('less  images');
          // }else{
          // }
          console.log('more then 5555 images');
          // console.log('alaaa',result.Data.Images[0].fanart);
        images   = result.Data.Images[0].fanart.map((data) => url + data.original[0]._);
          // store.dispatch({type:'GET_IMAGES',payload:images})

          // console.log('images:',images);
        }else{
          console.log('no images');
        }
        cb(images);
      });

    }
  };
  xhttp.open("GET", `http://thegamesdb.net/api/GetArt.php?id=2`, true);
  xhttp.send();
}
export {
  getApiData
}
