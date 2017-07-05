import React, { Component } from 'react';
import {getApiData} from './../actions.js';
console.log(getApiData);
class ApiData extends Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    getApiData();
  }
  render() {
    return (<div> loaded </div>);
  }
}

export default ApiData;
