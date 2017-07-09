import React from 'react';
import SimpleSlider from './slidShow.jsx';
import {Button, Icon,Popup} from 'semantic-ui-react';
import getImages from '../actions.js';
const defaultImages = ["http://thegamesdb.net/banners/fanart/original/164-7.jpg"];
import DownloadButton from './download.jsx'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: defaultImages,
      displayDownload : false
    };
    this.onDownload = this.onDownload.bind(this)
  }
  componentWillMount() {
    getImages((allImages) => {
      this.setState({images: allImages})
    })
  }

onDownload(){
  this.setState({
    displayDownload: !this.state.displayDownload
  })
}
  render() {
    return (
      <div>
        <SimpleSlider imagesList={this.state.images}/>
      </div>
    )
  }
}

module.exports = App;
