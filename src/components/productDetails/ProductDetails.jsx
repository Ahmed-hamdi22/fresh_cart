import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import Slider from "react-slick";
// import Loading from '../loader/Loading';
import HashLoader from "react-spinners/HashLoader";
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import Loading from '../loader/Loading';


export default function ProductDetails() {
const [ProductDetails, setProductDetails] = useState(null);
const [RelatedProuct, setRelatedProuct] = useState([]);
    let {id ,category}=useParams();

    let {AddtoCart,setCartCount} = useContext(CartContext);
    async function AddProduct(productId) {
      let response =await AddtoCart(productId);
      if(response){
        toast.success('Product added to cart successfully',{
          duration: 3000,
          position: 'top-right',
        });
      }else{
        toast.error('Failed to add product to cart',{
          duration: 3000,
          position: 'top-right',
        }
        );
      }
      console.log(response);
    }
    function getProuctDetails(id) {
        axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
        .then(({data})=>{
            console.log(data.data);
            setProductDetails(data.data)    
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    function getRelatedProuct(category) {
        axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
        .then(({data})=>{
            // console.log(data.data);
            let related = data.data.filter((product)=>product.category.name == category)
            setRelatedProuct(related)
            console.log(related);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    useEffect(() => {
        getProuctDetails(id);
            getRelatedProuct(category)
    }, [id , category]);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      if(!ProductDetails){
            return <Loading/>
      }
      
  return (  
   
    <>
       {/* <HashLoader color="#36d7b7" /> */}
     <div className='row'>
  
    <div className="w-1/4">
    <Slider {...settings}>
  {ProductDetails?.images.map( (image ,index) => 
            <img key={index} className='w-full  ' src={image} alt={ProductDetails?.title}/>
)}
  
</Slider>
    </div>
    <div className="w-3/4 p-6">

        <h1 className='text-lg font-normal text-gray-950'>{ProductDetails?.title}</h1>
        <p className='text-gray-700 font-ligh'>{ProductDetails?.description}</p>
    <div className="flex justify-between">
            <span>{ProductDetails?.price}$</span>
            <span>{ProductDetails?.ratingsAverage}<i className='fas fa-star text-yellow-400'></i></span>

          </div>
                          <button onClick={()=> AddProduct(product.id)} className='bg-green-600 w-full rounded-md p-4 m-2'>Add to cart</button>

          </div>
</div>
<div className='row'>


{
        RelatedProuct.map((product ,index )=>
          
        <div className="w-1/6 m-1"  key={index}>
        <Link to={`/ProductDetails/${product.id}/${product.category.name}`}>
        <img className='w-full rounded-md ' src={product.imageCover} alt={product.title}/>
        <span className='block text-green-600 font-light'>{product.category.name}</span>
        <h3 className='text-lg font-normal text-gray-800 mb-4'>{product.title.split(' ').slice(0,2).join(' ')}</h3>
          <div className="flex justify-between">
            <span>{product.price}$</span>
            <span>{product.ratingsAverage}<i className='fas fa-star text-yellow-400'></i></span>

          </div>
          </Link>
          <button className='btn' onClick={()=> AddProduct(product.id)}>Add to cart</button>

              </div>
     )
    }

    </div> 
    </>  
  
  )
}