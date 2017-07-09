import React, { Component } from 'react';
import { ShareButtons,generateShareIcon } from 'react-share';

const { FacebookShareButton,TwitterShareButton, WhatsappShareButton } = ShareButtons;
const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const WhatsappIcon = generateShareIcon('whatsapp');

export default class ShareButton extends Component {
  render() {
    const shareUrl = 'www.gamiflux.com';
    const title = 'To play PC games on Xbox One, please visit :';
    return (
      <div className="Demo__container">
        <div className="Demo__some-network">
          <FacebookShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button">
            <FacebookIcon
              size={36}
              round />
          </FacebookShareButton>
        </div>

        <div className="Demo__some-network">
          <TwitterShareButton
            url={shareUrl}
            title={title + shareUrl}
            className="Demo__some-network__share-button">
            <TwitterIcon
              size={36}
              round />
          </TwitterShareButton>
        </div>

        <div className="Demo__some-network">
          <WhatsappShareButton
            url={shareUrl}
            title={title}
            separator=":: "
            className="Demo__some-network__share-button">
            <WhatsappIcon size={36} round />
          </WhatsappShareButton>
        </div>

      </div>
    );
  }
}
