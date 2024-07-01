
import axios from "axios"
import { useEffect, useState } from "react"
import Loading from "../loader/Loading"
import { Link } from "react-router-dom"
export default function Categories() {
  let [categories,setCategories]=useState([])
  let [isLoading,setIsLoading]=useState(true)
  async function getCategories() {
    setIsLoading(true)
    let {data}=await axios.get("https://ecommerce.routemisr.com/api/v1/categories")
    // console.log(data.data);
    setCategories(data.data)
    setIsLoading(false)
  }
  useEffect(()=>{ 
    getCategories()
  },[])
  if(isLoading){
    return <Loading/>
  }
  return (
    <>
     

<div className='container mx-auto'>
      <div className='mt-10'>
       
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          {categories?.map((category, index) => (
           <Link key={index}>
            <div  className='border p-4'>
              <img 
                src={category.image}
                alt={category.name}
                className='w-full w-100 h-20 object-contain mb-2'
              />
              <p className='text-center'>{category.name}</p>
            </div>
           </Link>
          ))}
        </div>
        </div>
        </div>

    </>
  )
}
