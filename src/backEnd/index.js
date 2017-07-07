const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const {
  PORT
} = require('../../config.js');
const {
  getImages
} = require('./utils/utils.js');

var images = [];

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/images', (req, res) => {
  const fullImages = () => {
    const id = (Math.floor(Math.random() * 1000) + 1).toString()
    getImages(id, (err, result) => {
      if (err) {
        return res.json({
          'err': 'error fetching images'
        }).status(400);
      }
      const url = result.Data.baseImgUrl[0];
      if (result.Data.Images[0].fanart) {
        images = images.concat(result.Data.Images[0].fanart.map((data) => url + data.original[0]._));
        if (images.length < 3) {
          fullImages();
        } else {
          if (images.length > 6) {
            return res.json(images.slice(0, 5))
          } else {
            return res.json(images)
          }
        }
      } else {
        fullImages();
      }
    });
  }
  fullImages();
});

app.listen(PORT, () => {
  console.log('Our app is running on http://localhost:' + PORT);
});
