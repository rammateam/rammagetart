
var random  = Math.random() * (100 - 1) + 1;

module.exports = {
  APP_ID: '781400568651772',
  URL: ' http://thegamesdb.net/api/GetArt.php?id='+random,
  PORT: process.env.PORT || 3030
}
