import React, { Component } from 'react';
import { ShareButtons,generateShareIcon } from 'react-share';

const { FacebookShareButton,TwitterShareButton, WhatsappShareButton } = ShareButtons;
const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const WhatsappIcon = generateShareIcon('whatsapp');

export default class ShareButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      facebookBG: '#323232',
      twitterBG: '#323232',
      whatsappBG: '#323232'
    }
  }

  render() {
    const shareUrl = 'www.gamiflux.com';
    const title = 'To play PC games on Xbox One, please visit :';
    return (
      <div className="Demo__container">
        <div className="Demo__some-network" onMouseOver= {() => this.setState({facebookBG:'#3b5998'})} onMouseLeave={() => this.setState({facebookBG:'#323232'})}>
          <FacebookShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button " >
            <FacebookIcon
              size={23}
              round
              iconBgStyle={{fill: this.state.facebookBG}} />
          </FacebookShareButton>
        </div>

        <div className="Demo__some-network" onMouseOver= {() => {this.setState({twitterBG:'#1dcaff'})}} onMouseLeave={() => {this.setState({twitterBG:'#323232'})}}>
          <TwitterShareButton
            url={shareUrl}
            title={title + shareUrl}
            className="Demo__some-network__share-button">
            <TwitterIcon
              size={23}
              round
              iconBgStyle={{fill: this.state.twitterBG}}/>
          </TwitterShareButton>
        </div>

        <div className="Demo__some-network" onMouseOver= {() => this.setState({whatsappBG:'#34AF23'})} onMouseLeave={() => this.setState({whatsappBG:'#323232'})}>
          <WhatsappShareButton
            url={shareUrl}
            title={title}
            separator=":"
            className="Demo__some-network__share-button">
            <WhatsappIcon size={23} round iconBgStyle={{fill: this.state.whatsappBG}}/>
          </WhatsappShareButton>
        </div>

      </div>
    );
  }
}
