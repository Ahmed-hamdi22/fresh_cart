import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import { CartContext } from '../../context/CartContext';
import toast from 'react-hot-toast';
import Loading from '../loader/Loading';
// import { wishlistContext } from '../../context/WishlistContext';

export default function RecntProducts() {
  // const {addProductToWishlist} = useContext(wishlistContext);
  // const { addToCart, addToWishlist, removeWishlistItem, getWishlistItems,setCart,cart, setWishlist, wishlist } = useContext(CartContext);

  const [isLoad, setIsLoad] = useState(true)
let {AddtoCart,addToWishlist, removeWishlistItem, getWishlistItems,setWishlist, wishlist } = useContext(CartContext);
async function AddProduct(productId) {
  let response = await AddtoCart(productId);
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

}
useEffect(() => {
  getWishlistItems().catch(error => {
    console.error('Error fetching wishlist items:', error);
  });
}, [getWishlistItems]);

const toggleWishlist = (productId) => {
  if (wishlist.some(item => item.id === productId)) {
    removeWishlistItem(productId)
      .then(response => {
        if (response.data.status === "success") {
          toast.error('Product removed from Wishlist', { duration: 2000 });
        }
      })
      .catch(error => {
        toast.error('An error occurred while removing from Wishlist', { duration: 2000 });
      });
  } else {
    addToWishlist(productId)
      .then(response => {
        if (response.data?.status === "success") {
          toast.success('Product added to Wishlist', { duration: 2000 });
        }
      })
      .catch(error => {
        toast.error('An error occurred while adding to Wishlist', { duration: 2000 });
      });
  }
};

const isProductInWishlist = (productId) => {
  return wishlist.some(item => item.id === productId);
};



  function getRecnt() {
        return   axios.get(`https://ecommerce.routemisr.com/api/v1/products`)

  }
 let  {data ,isError ,error, isLoading ,isFetching,}= useQuery(
  {queryKey:['recentProduct'],
    queryFn:getRecnt,
    staleTime:80000,
    

  });

  if(isLoading){
    return <div className="py-8 w-full justify-center flex">
       < Loading/>
    </div>
  }

  // const [RecntProduct, setRecntProduct] = useState([]);

  //   function getRecntProuct() {
  //       axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
  //      .then(({data})=>{
  //       setRecntProduct(data.data)       
  //       }).catch((err)=>{
  //       // console.log(err);
  //      })
  //       }z
     
  //   useEffect(() => {
      
  //    getRecntProuct();
  //   }, []);

  
 
 
  return (
    <div className='row'>
      {
        data?.data.data.map((product, index) => 
          <div key={index} className="w-1/6 px-5">
          <div className="product py-5">
            <Link to={`/ProductDetails/${product.id}/${product.category.name}`}>
            <img className='w-full' src={product.imageCover} alt={product.title}/>
            <span className='block text-green-600 font-light'>{product.category.name}</span>
            <h3 className='text-lg font-normal text-gray-800 mb-4'>{product.title.split(' ').slice(0,2).join(' ')}</h3>
             
              </Link>
              <div className="flex justify-between">
                <span>{product.price}$</span>
                <span>{product.ratingsAverage}<i className='fas fa-star text-yellow-400'></i></span>
                <i onClick={() => toggleWishlist(product.id)}
                  className={`fa-heart cursor-pointer text-2xl mt-1  
                    ${isProductInWishlist(product.id) ? 'fa-solid text-red-600' : 'fa-regular'}`}></i>
            
              </div>
              
              <button onClick={()=> AddProduct(product.id)} className='btn'>Add to cart</button>

          </div>
        </div>
     ) }
     
    </div>
  )

}



// import axios from 'axios'
// import React, { useContext, useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
// import { ContextCart } from '../../context/ContextCart';

// export default function RecntProducts() {
//   const [RecntProduct, setRecntProduct] = useState([]);
//  const { addproductToCart}= useContext(ContextCart);
// //  function addToCart(id) {
// //   addproductToCart(id)
  
// // }
//     function getRecntProuct() {
//         axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
//        .then(({data})=>{
//         setRecntProduct(data.data)       
//         }).catch((err)=>{
//         console.log(err);
//        })
//         }

        
//         // async function addToCart(id) {
          
//       // let {data} =  await axios.post("https://ecommerce.routemisr.com/api/v1/cart",{productId:id},{
//       //     headers:{
//       //       token : localStorage.getItem("token")
//       //       }
//       //    })
//       //    if (data.status == "success") {
//       //     console.log("susss");
//       //    }else{
//       //     console.log(err);
//       //    }
//       //    console.log(data);
//         // }
//     useEffect(() => {
      
//      getRecntProuct();
//     }, []);
//   return (
//     <div className='row'>
//       {
//         RecntProduct.map((product, index) => 
//           <div key={index} className="w-1/6 px-5">
//           <div className="product py-4">
//             <Link to={`/ProductDetails/${product.id}/${product.category.name}`}>
//             <img className='w-full' src={product.imageCover} alt={product.title}/>
//             <span className='block text-green-600 font-light'>{product.category.name}</span>
//             <h3 className='text-lg font-normal text-gray-800 mb-4'>{product.title.split(' ').slice(0,2).join(' ')}</h3>
//               <div className="flex justify-between">
//                 <span>{product.price}$</span>
//                 <span>{product.ratingsAverage}<i className='fas fa-star text-yellow-400'></i></span>

//               </div>
//               </Link>
//               <button  className='btn'>Add to cart</button>

//           </div>
//         </div>
//      ) }
     
//     </div>
//   )
// }
