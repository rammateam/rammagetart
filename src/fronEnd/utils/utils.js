const images =
[
  "http://thegamesdb.net/banners/fanart/original/519-1.jpg",
  "http://thegamesdb.net/banners/fanart/original/519-2.jpg",
  "http://thegamesdb.net/banners/fanart/original/128-1.jpg",
  "http://thegamesdb.net/banners/fanart/original/128-2.jpg",
  "http://thegamesdb.net/banners/fanart/original/967-1.jpg",
  "http://thegamesdb.net/banners/fanart/original/967-2.jpg",
  "http://thegamesdb.net/banners/fanart/original/70-1.jpg",
  "http://thegamesdb.net/banners/fanart/original/70-2.jpg",
  "http://thegamesdb.net/banners/fanart/original/70-3.jpg",
  "http://thegamesdb.net/banners/fanart/original/70-4.jpg",
  "http://thegamesdb.net/banners/fanart/original/70-5.jpg",
  "http://thegamesdb.net/banners/fanart/original/70-6.jpg",
  "http://thegamesdb.net/banners/fanart/original/70-7.jpg",
  "http://thegamesdb.net/banners/fanart/original/868-1.jpg",
  "http://thegamesdb.net/banners/fanart/original/768-1.jpg",
  "http://thegamesdb.net/banners/fanart/original/822-1.jpg",
  "http://thegamesdb.net/banners/fanart/original/822-2.jpg",
  "http://thegamesdb.net/banners/fanart/original/107-1.jpg",
  "http://thegamesdb.net/banners/fanart/original/107-2.jpg",
  "http://thegamesdb.net/banners/fanart/original/107-3.jpg",
  "http://thegamesdb.net/banners/fanart/original/669-1.jpg",
  "http://thegamesdb.net/banners/fanart/original/669-2.jpg",
  "http://thegamesdb.net/banners/fanart/original/166-1.jpg",
  "http://thegamesdb.net/banners/fanart/original/166-2.jpg",
  "http://thegamesdb.net/banners/fanart/original/166-3.jpg",
  "http://thegamesdb.net/banners/fanart/original/166-4.jpg",
  "http://thegamesdb.net/banners/fanart/original/166-5.jpg",
  "http://thegamesdb.net/banners/fanart/original/166-6.jpg",
  "http://thegamesdb.net/banners/fanart/original/166-7.jpg",
  "http://thegamesdb.net/banners/fanart/original/158-1.jpg",
  "http://thegamesdb.net/banners/fanart/original/158-10.jpg",
  "http://thegamesdb.net/banners/fanart/original/158-2.jpg",
  "http://thegamesdb.net/banners/fanart/original/158-3.jpg",
  "http://thegamesdb.net/banners/fanart/original/158-4.jpg",
  "http://thegamesdb.net/banners/fanart/original/158-5.jpg",
  "http://thegamesdb.net/banners/fanart/original/158-6.jpg",
  "http://thegamesdb.net/banners/fanart/original/158-7.jpg",
  "http://thegamesdb.net/banners/fanart/original/158-8.jpg",
  "http://thegamesdb.net/banners/fanart/original/158-9.jpg"
]

const randomImage = () => {
  const index = (Math.floor(Math.random() * images.length - 1) + 0).toString()
  console.log(images[index]);
  var initialImageArray = [];
  initialImageArray.push(images[index]);
  localStorage.setItem('initialPhoto',images[index]);
  return initialImageArray;
}

export default randomImage;
