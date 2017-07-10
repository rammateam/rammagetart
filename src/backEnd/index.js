const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const {
  PORT
} = require('../../config.js');
const {
  getImages,
  randomArray
} = require('./utils/utils.js');

var allImages = [];

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/images', (req, res) => {
  const fullImages = () => {
    const requestsArray = randomArray();
    getImages(requestsArray, (err, result) => {
      if (err) {
        console.log('err', err);
        return res.json({
          'err': 'error fetching images'
        }).status(400);
      }
      return res.json(result);
    });
  }
  fullImages();
});

app.listen(PORT, () => {
  console.log('Our app is running on http://localhost:' + PORT);
});
