 import React, { useEffect, useState } from 'react';
import Style from './Cart.module.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export default function Cart() {
  let {getuserCart} = useContext(CartContext)
    const [counter, setCounter] = useState(0);

    // async function GetCart() {
    //  let result =await getuserCart();
    //   console.log(result);
    // }
    useEffect(()=>{
      getuserCart();
      
    } , []);
  return <>
    <h1>Carti</h1>
  </>
}







// import axios from 'axios';
// import React, { useEffect } from 'react'

// export default function Cart() {

  
// async function getuserCart() {
//  let {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/cart",{
//   headers:{
//         token :localStorage.getItem("userToken")
//       }
//    })
//   console.log(data);
// }
// useEffect(() => {
//   getuserCart()
//   return () => {
    
//   };
// }, []);
//   return (
//     <div>Cart</div>
//   )
// }
