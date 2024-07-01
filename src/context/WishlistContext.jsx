import { Children, createContext, useEffect, useState } from "react";
import { useContext } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { UserContext } from "./UserContext";

export const WishlistContext = createContext()
export default function WishlistProvider({children}){
    let {userToken} = useContext(UserContext)
    const[wishInfo,setwishInfo] = useState(null)

    useEffect(()=>{
        getLogedUserWishList()
      },[])
   
    async function addProductToWishList({id}){
        try {
         let options = {
             url:"https://ecommerce.routemisr.com/api/v1/wishlist",
             method: "POST",
             headers:{
                 token,
             },
             data:{
                 productId: id
             }
         }
     
     let {data} = await axios.request(options)
     console.log(data);
     toast.success("product added to Wishlist")
     setwishInfo(data)
        } 
        catch (error) {
         console.log(error);
     }}


     async function getLogedUserWishList(){
        try {
         let options = {
             url:"https://ecommerce.routemisr.com/api/v1/wishlist",
             method: "GET",
             headers:{
                 token,
             },
         }
     
     let {data} = await axios.request(options)
     setwishInfo(data)
     return data
        } catch (error) {
          
     }}
    
    


     async function removeItemsFromWishlist({id}){
        try {
         let options ={
             url:`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,
             method:'DELETE',
             headers:{
                 token,
     
             },
         } 
     let {data} = await axios.request(options)
     toast.success("product deleted successfully")
     if(data.count === 0){
        setwishInfo([])
     }else{
        setwishInfo(data)
     }
        } catch (error) {
         console.log(error);
        }
     }


     return <>
     <WishlistContext.Provider value={{addProductToWishList,removeItemsFromWishlist,getLogedUserWishList,wishInfo,setwishInfo}}>
     {children}
     </WishlistContext.Provider>
   
     </>
}