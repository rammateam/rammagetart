import React from 'react';
import SimpleSlider from './slidShow.jsx';
import ShareButton from './shareFacebook.jsx';
import {Button, Icon,Popup} from 'semantic-ui-react';
import getImages from '../actions.js';
import randomImage from '../utils/utils.js';
const defaultImages = randomImage();
import DownloadButton from './download.jsx'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: defaultImages,
      displayDownload : false,
      shareBG: 'grey'
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
        <SimpleSlider imagesList={this.state.images}/>
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
          <div className='share-icon' onMouseOver= {() => {this.setState({shareBG:'blue'})}} onMouseLeave={() => {this.setState({shareBG:'grey'})}}>
            <div>
              <Button circular onClick={this.onShare} color= {this.state.shareBG} size='mini' icon='share alternate'></Button>

              </div>
              {this.state.displayShare
                ? <div className='share-button'>
                    <ShareButton/>
                  </div>
                : null
               }
          </div>
      </div>
    )
  }
}

module.exports = App;
