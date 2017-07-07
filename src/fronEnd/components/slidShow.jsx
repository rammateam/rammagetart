import React, {Component} from 'react';
import Slider from 'react-slick';
import {getApiData} from './../actions.js';
import {connect} from 'react-redux';
import store from './../actions.js';
import ImagesList from '../components/imagesList.jsx';

// } = ({imagesList})=> {

class SimpleSlider extends Component{
    constructor(props){
      super(props);

      this.state = {
        interval: null
      }
      this.next = this.next.bind(this)
    }
    componentDidMount(){
      const intervalID = setInterval(this.next , 10000);
      this.setState({
        interval: intervalID
      })
    }
    componentWillUnMount(){
      clearInterval(this.state.interval)
    }
  next() {
    this.slider.slickNext()
  }
    render(){
      const list = this.props.imagesList.map((item, index) => {
        return (
          <div key={index}><ImagesList image={item}/></div>
        )
      })
      const settings = {
        speed: 2000,
        fade: true,
        pauseOnHover: false,
        draggable:false
      }
    return (
      <Slider ref={c => this.slider = c } {...settings} className='main' >
        {list}
      </Slider>
    );}
}
export default SimpleSlider;
