import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { HashLoader } from 'react-spinners';

export default function RecntProducts() {
  function getRecnt() {
        return   axios.get(`https://ecommerce.routemisr.com/api/v1/products`)

  }
 let  {data ,isError ,error, isLoading ,isFetching}= useQuery(
  {queryKey:['recentProduct'],
    queryFn:getRecnt,
    staleTime:80000,
   
  });
  if(isLoading){
    return <div className="py-8 w-full justify-center flex">
       <HashLoader color='green'/>
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
  //       }
     
  //   useEffect(() => {
      
  //    getRecntProuct();
  //   }, []);
  return (
    <div className='row'>
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
