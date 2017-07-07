import React, {Component} from 'react';
import Slider from 'react-slick';
import {getApiData} from './../actions.js';
import {connect} from 'react-redux';
import store from './../actions.js';
import ImagesList from '../components/imagesList.jsx';

const SimpleSlider = ({imagesList})=> {
    const list = imagesList.map((item, index) => {
      return (
        <div key={index}><ImagesList image={item}/></div>
      )
    })
    console.log(list);
    var settings = {
      autoplay: true,
      fade: true,
      autoplaySpeed: 400   }
    return (
      <Slider className='main' {...settings}>
        {list}
      </Slider>

    );
}
export default SimpleSlider;
