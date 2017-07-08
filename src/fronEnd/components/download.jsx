import React from 'react';
import {Button, Icon,Popup} from 'semantic-ui-react';


 const DownloadButton= ()=> {
  return(
    <div className="Demo__container">
      <a href='https://www.microsoft.com/en-us/windows/' target="_blank">
        <Button circular primary icon='windows'/>
      </a>
      <a href='https://www.apple.com/lae/' target="_blank">
        <Button circular primary icon='apple'/>
      </a>
      <a href='https://www.linux.org/' target="_blank">
        <Button circular primary icon='linux'/>
      </a>
    </div>

  )
}
export default DownloadButton;
