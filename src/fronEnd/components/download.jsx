import React from 'react';
import {Button, Icon,Popup} from 'semantic-ui-react';


 const DownloadButton= ()=> {
  return(
    <div className="Demo__container">
      <a href='https://www.microsoft.com/en-us/windows/' target="_blank">
        <Button circular primary icon='windows'/>
      </a>
    </div>

  )
}
export default DownloadButton;
