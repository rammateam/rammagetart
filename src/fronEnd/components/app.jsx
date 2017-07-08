import React from 'react';
import ShareButton from './shareFacebook.js';
import SimpleSlider from './slidShow.jsx';
import {Button, Icon,Popup} from 'semantic-ui-react';
import getImages from '../actions.js';
const defaultImages = ["http://thegamesdb.net/banners/fanart/original/164-7.jpg"];
import DownloadButton from './download.jsx'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayShare: false,
      images: defaultImages,
      displayDownload : false
    };
    this.onShare = this.onShare.bind(this)
    this.onDownload = this.onDownload.bind(this)
  }
  componentWillMount() {
    getImages((allImages) => {
      this.setState({images: allImages})
    })
  }
  onShare() {
    this.setState({
      displayShare: !this.state.displayShare
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
        <div className='content'>
          <div className='icon'>
            <img className='logo' src='https://raw.githubusercontent.com/rammateam/rammagetart/master/logo.png'/>
          </div>
          <div className='icon'>
            <a href="https://www.facebook.com/" target="_blank">
              <Popup className='popup'trigger={< Button onClick = {
                this.onFacebook
              }
              circular color = 'facebook' icon='facebook'>< /Button>}
              content='Visit us'
              position='right center'
              />
            </a>
          </div>
          <div className='icon'>
            <a href="https://twitter.com/" target="_blank">
              <Popup
    trigger={<Button circular color='twitter' icon ='twitter'>
    </Button>}
    content='Visit us'
    position='right center'
  />

            </a>
          </div>
          <div className='icon share-icon'>
            <Button circular onClick={this.onShare} primary icon='share alternate'></Button>
              {this.state.displayShare
                ? <div className='share-button'>
                    <ShareButton/>
                  </div>
                : null
               }
          </div>
          <div className='icon share-icon'>
            <Popup className='popup'trigger={<Button circular onClick={this.onDownload}
              color='green' icon ='cloud download'/>}
            content='Download app'
            position='bottom left'
            />
              {this.state.displayDownload
                ? <div className='share-button'>
                  <DownloadButton/>
                  </div>
                : null
               }
          </div>
        </div>
        <SimpleSlider imagesList={this.state.images}/>
      </div>
    )
  }
}

module.exports = App;
