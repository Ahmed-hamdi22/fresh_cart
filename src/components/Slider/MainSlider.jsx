import React from 'react'
import image3 from "../../assets/images/slider-image-3.jpeg"
import image2 from "../../assets/images/slider-image-2.jpeg"
import image1 from "../../assets/images/slider-image-1.jpeg"
import image4 from "../../assets/images/grocery-banner-2.jpeg"

import Slider from "react-slick";

export default function MainSlider() {
    var settings = {
        dots:false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        arrows:false,

      };
  return (
    <div className='row'>
        <div className="w-3/4">
        <Slider {...settings}>
        <img src={image3}  className='w-full h-[400px]' alt=''/>
        <img src={image1}  className='w-full h-[400px]' alt=''/>
        <img src={image4}  className='w-full h-[400px]' alt=''/>


          </Slider>
        </div>
        <div className="w-1/4">
        <img src={image2} className='w-full h-[200px]' alt=''/>
     <img src={image1} className='w-full h-[200px]' alt=''/>           
        </div>
    </div>
  )
}