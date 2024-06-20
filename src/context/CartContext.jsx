import axios from "axios";
import { createContext, useState } from "react";
export let CartContext = createContext();
export default function CartContextProvider({children}){
    const [cartCount, setCartCount] = useState(0);

    

    let  headers = {
        token:localStorage.getItem('userToken')
        }
        
   async function getuserCart() {
 let {data}=  await axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{
        headers
     })
     setCartCount(data.numOfCartItems)
    

}

// function getuserCart() {
//   return  axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{
//         headers
//      })
//      .then((res)=>res)
//      .catch((err)=>err)

// }
function AddtoCart(productId) {
     return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,{
         productId:productId
     },{
         headers
     })
     .then((response)=>response)
          .catch((err)=>err)

 }

function UpdateItemCartCount(productId ,count) {
    return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId }`,{
            count:count
     },{
         headers
     }).then((response)=>response)
          .catch((err)=>err)
 }

 function RemoveItemCartCount(productId ) {
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId }`,{
         headers
     }).then((response)=>response)
          .catch((err)=>err)
 }
 
 function ClearCart() {
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`,{
         headers
     }).then((response)=>response)
          .catch((err)=>err)
 }
 

return<CartContext.Provider value={{ ClearCart,cartCount,getuserCart,setCartCount,AddtoCart ,UpdateItemCartCount,RemoveItemCartCount}}>
    {children}
</CartContext.Provider>
}
 