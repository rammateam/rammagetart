const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3030;
const {
  getImages
} = require('./utils/utils.js');
var images = [];
app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  const fullImages = () => {
    const id = Math.floor(Math.random() * 1000) + 1;
    getImages(id, (err, result) => {
      const url = result.Data.baseImgUrl[0];
      if (result.Data.Images[0].fanart) {
        images = images.concat(result.Data.Images[0].fanart.map((data) => url + data.original[0]._));
        if (images.length < 5) {
          fullImages();
        } else {
          res.send(images)
        }
      }
    });
  }
  fullImages();
});



app.listen(PORT, () => {
  console.log('Our app is running on http://localhost:' + PORT);
});
