import React from 'react';
import ShareButton from './shareFacebook.js';
import SimpleSlider from './slidShow.jsx'
import {Button, Icon} from 'semantic-ui-react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayShare: false
    };
    this.onShare = this.onShare.bind(this)
    this.onFacebook = this.onFacebook.bind(this)
    this.onTwitter = this.onTwitter.bind(this)
  }
  onShare() {
    console.log('alaaaa');
    this.setState({
      displayShare: !this.state.displayShare
    })
  }
  onFacebook(){
    console.log('facebook');
  }
  onTwitter(){

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
        <SimpleSlider/>
      </div>
    )
  }
}

module.exports = App;
// <Button
//   icon='fork'
//   label={{ as: 'a', basic: true, content: 'share' }}
//   labelPosition='left'
// />
