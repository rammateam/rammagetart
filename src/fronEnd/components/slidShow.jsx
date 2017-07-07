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
    const settings = {
      autoplay: true,
      fade: true,
      autoplaySpeed: 450,
      pauseOnHover: false,
    }
    return (
      <Slider {...settings} className='main' >
        {list}
      </Slider>

    );
}
export default SimpleSlider;
