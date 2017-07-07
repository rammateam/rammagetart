import React from 'react';
import ShareButton from './shareFacebook.js';
import SimpleSlider from './slidShow.jsx';
import {Button, Icon} from 'semantic-ui-react';
import getImages from '../actions.js';
const defaultImages =["http://thegamesdb.net/banners/fanart/original/164-7.jpg"];
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
