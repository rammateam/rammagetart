import React, {Component} from 'react';
import Slider from 'react-slick';
import {getApiData} from './../actions.js';
import {connect} from 'react-redux'
import store from './../actions.js'
class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    this.state={
      images : []
    }
  }
  componentWillMount() {
    //  getApiData((image)=>{
     //
    //    console.log('image',image);
    //  })
    //  this.setState({images:image})
  }
  render() {

    var settings = {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      fade: true
    }
    return (

      <Slider className='main' {...settings}>
        <div>
                 <img src='https://www.w3schools.com/css/img_fjords.jpg'/ >
               </div>
         <div>
           <img src='https://www.w3schools.com/css/img_lights.jpg'/>
         </div>

      </Slider>

    );
  }
}
// const mapStateToProps = (store) => {
//   // console.log('store:',store);
//   console.log('store.main',store.main);
//   return {imageList: store.main}
// }
// const mapDispatchToProps = () => {
//   return {
//     getImages: () => {
//       getApiData();
//     }
//   }
// }

export default SimpleSlider;
// <div>
//          <img src={this.props.imageList[0]}/ >
//        </div>
//  <div>
//    <img src={this.props.imageList[1]}/>
//  </div>
