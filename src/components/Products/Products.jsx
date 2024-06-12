import React, { useEffect, useState } from 'react';
import Style from './Products.module.css';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import axios from 'axios';


export default function Products() {
  function getRecnt() {
    return   axios.get(`https://ecommerce.routemisr.com/api/v1/products`)

}
let  {data ,isError ,error, isLoading ,isFetching}= useQuery(
{queryKey:['recentProduct'],
queryFn:getRecnt,
staleTime:80000,
// retry:5,
// retryDelay:1000,
// refetchInterval:3000,
});
if(isLoading){
return <div className="py-8 w-full justify-center flex">
   <HashLoader color='green'/>
</div>
}
  return <div className='row'>
  {
    data?.data.data.map((product, index) => 
      <div key={index} className="w-1/6 px-5">
      <div className="product py-4">
        <Link to={`/ProductDetails/${product.id}/${product.category.name}`}>
        <img className='w-full' src={product.imageCover} alt={product.title}/>
        <span className='block text-green-600 font-light'>{product.category.name}</span>
        <h3 className='text-lg font-normal text-gray-800 mb-4'>{product.title.split(' ').slice(0,2).join(' ')}</h3>
          <div className="flex justify-between">
            <span>{product.price}$</span>
            <span>{product.ratingsAverage}<i className='fas fa-star text-yellow-400'></i></span>

          </div>
          </Link>
          <button className='btn'>Add to cart</button>

      </div>
    </div>
 ) }
 
</div>

}
