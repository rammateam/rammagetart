import React from 'react';
import ShareButton from './shareFacebook.js';
import SimpleSlider from './slidShow.jsx'
import {Button, Icon} from 'semantic-ui-react'
import getImages from '../actions.js'
const defaultImages =[
 "http://marionettestudio.com/wp-content/uploads/2016/11/22-despicable-me-2-animation-movie.jpg",
 "http://webneel.com/daily/sites/default/files/images/daily/01-2016/5-kung-fu-panda-3-animation-movie-list-2016-wallpaper.preview.jpg",
 "https://www.pixelstalk.net/wp-content/uploads/2016/07/Images-Animation-Download.jpg",
 "http://lucasfilm.com/assets/divisions/Lucasfilm_Animation_01-d61a1b8a9351.jpg",
 "https://s-media-cache-ak0.pinimg.com/736x/50/a6/43/50a6433096bbbcbf4d07d16581ea230c.jpg"
]
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayShare: false,
      images : defaultImages
    };
    this.onShare = this.onShare.bind(this)
  }
  componentWillMount(){
    getImages((allImages)=>{
      this.setState({
        images : allImages
      })
    })
  }
  onShare() {
    this.setState({
      displayShare: !this.state.displayShare
    })
  }

  render() {
    return (
      <div>
        <div className='content'>
          <div className='icon'>
            <a href="https://www.facebook.com/" target="_blank">
              <Button onClick={this.onFacebook} circular color='facebook'>
              <Icon name='facebook'/>
              My Page
            </Button>
          </a>
          </div>
          <div className='icon'>
            <a href="https://twitter.com/" target="_blank">
            <Button circular color='twitter'>
              <Icon name='twitter'/>
              My Page
            </Button>
          </a>
          </div>
          <div className='share'>
            <Button circular onClick={this.onShare}  primary>
              <Icon name='share alternate'/>
              Share
            </Button>
          </div>
          <div>
            {this.state.displayShare
              ? <div className='share-button'>
              <ShareButton/>
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
