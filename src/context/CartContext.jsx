
import axios from "axios";
import { createContext } from "react";

export let CartContext = createContext();

export default function CartContextProvider({children}){
    let  headers = {
        token:localStorage.getItem('userToken')
        }


function getuserCart() {
    
    axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{
        headers
     }).then((res)=>console.log(res))
     .catch((err)=>console.log(err))
}



return<CartContext.Provider value={{getuserCart}}>
    {children}
</CartContext.Provider>
}
