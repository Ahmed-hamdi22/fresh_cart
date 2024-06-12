import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";

export default function CatrgorySlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 3,
        autoplay:true,
      };
      const [categories, setCategories] = useState([]);
      function getCategory() {
          axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
         .then(({data})=>{
          setCategories(data.data)       
          }).catch((err)=>{
          // console.log(err);
         })
          }
      useEffect(() => {
        
       getCategory();
      }, []);
  return (
<div className="py-5">
    <h2 className='py-4 text-gray-800 font-bold'>Shop Popualr Categories</h2>
<Slider {...settings}>
      {categories?.map( (category ,index) => 
      <div key={index}>
     <img className='w-full object-cover h-[200px] ' src={category.image} alt={category?.name}/>
     <h3 className='text-center p-2 '>{category.name}</h3>
      </div>
)}
    </Slider>
</div>
  )
}
