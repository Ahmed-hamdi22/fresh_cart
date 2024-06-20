 import React, { useEffect, useState } from 'react';
import Style from './Cart.module.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
// import { useQuery } from 'react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from '../loader/Loading';
import toast from 'react-hot-toast';




export default function Cart() {
  let {UpdateItemCartCount,RemoveItemCartCount,ClearCartcartCount, setCartCount,ClearCart} = useContext(CartContext)
    const [cartDetails, setcartDetails] = useState(null);
      const [isLoading, setIsLoading] = useState(true);
      

    // async function GetCart() {
    //  let {data} = await getuserCart();
    //   console.log(data);
    //   setcartDetails(data);

    // }
    
    let  headers = {
      token:localStorage.getItem('userToken')
      }
async function getuserCart() {
  setIsLoading(true);
let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{
      headers
   })
   setIsLoading(false)
   setCartCount(data.numOfCartItems)
   setcartDetails(data);
}
    async function UpdateCartCount(productId ,count) {

      let {data} = await UpdateItemCartCount(productId ,count);
       setcartDetails(data);
       setCartCount(data.numOfCartItems)
       if (count == 0) {
        DeletCartItem(productId)
        setIsLoading(false); 
       }
  
     }
     async function DeletCartItem(productId ) {
      let {data} = await RemoveItemCartCount(productId );
      //  console.log(result.data.data);
       setcartDetails(data);
       setCartCount(data.numOfCartItems)
       setIsLoading(false); 
     }
     async function ClearAllCart() {
      let {data} = await ClearCart();
      //  console.log(result.data.data);
       setcartDetails(null);
         }

  
      async function checkOut() {
        // let {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/orders/checkout-session/642e5663fc6ec80008fc40bf",
        //   {
        //     "shippingAddress":{
        //         "details ": "details",
        //         "phone": "01010700999",
        //         "city": "Cairo"
        //         }
        // },{
        //   params :{
        //     url:"http://localhost:5173"
        //   },
        //  headers: {
        //   token:localStorage.getItem('userToken')
        //  }
        // }
        // )
        // console.log(data);
      }

    useEffect(()=>{
      getuserCart()
      // GetCart();
    } , []);

    
  return <>
   
  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <h2 className=' text-3xl text-center text-green-600 mt-4'> Shopping Cart</h2>
  <div className="flex align-middle justify-between mx-auto w-3/4 ">
  {cartDetails?.data.products.length > 0 ?

      <button className='bg-red-600 text-white  ms-auto block p-2 rounded-md  ' onClick={ClearAllCart}>clear Cart</button>
   : <h2 className='text-center my-12 mx-auto'>Your Cart Is Empty </h2>
     }   </div>
   <table className="w-3/4 mx-auto  my-6 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-16 py-3">
          <span className="sr-only">Image</span>
        </th>
        <th scope="col" className="px-6 py-3">
          Product
        </th>
        <th scope="col" className="px-6 py-3">
          Qty
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
   
    <tbody>
    {isLoading && <Loading className="text-center my-12 mx-auto"/>}
      {!isLoading && cartDetails?.data.products.map((product,index)=>
      <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="p-4">
        <img src={product.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
      {product.product.title}
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <button onClick={()=>UpdateCartCount(product.product.id ,product.count-1)} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
            <span className="sr-only">Quantity button</span>
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
            </svg>
          </button>
       <div>
       <span>{product.count}</span>   
          </div>
          <button  onClick={()=>UpdateCartCount(product.product.id ,product.count+1)} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
            <span className="sr-only">Quantity button</span>
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
            </svg>
          </button>
        </div>
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
<span>
{product.price}$

  </span>      </td>
      <td className="px-6 py-4">
        <span  className="font-medium cursor-pointer text-red-600 dark:text-red-500 hover:underline" onClick={()=>DeletCartItem(product.product.id)}>Remove</span>
      </td>
    </tr>)
      
      }

    </tbody>
  </table>

</div>
<div className=" px-5 flex justify-between mt-5"> 
  <Link to={`/address/${cartDetails?.data._id}`} className='bg-green-600  text-white rounded-md p-5' onClick={ checkOut}> check out</Link>
  <h3 className=' text-3xl text-left text-gray-600 mt-4'><span className='text-green-600'>Total Cart Price:</span> {cartDetails?.data.totalCartPrice} $</h3>

</div>
    </>
    }




