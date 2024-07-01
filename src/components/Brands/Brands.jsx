
import axios from "axios"
import { useEffect, useState } from "react"
import Loading from "../loader/Loading"
export default function Brands() {
  let [Brands,setBrands]=useState([])
  let [isLoading,setIsLoading]=useState(true)

  async function getbrands() {
    setIsLoading(true)
    let {data}=await axios.get("https://ecommerce.routemisr.com/api/v1/brands")
    console.log(data.data);
    setBrands(data.data)
    setIsLoading(false)
  }
  useEffect(()=>{ 
    getbrands()
  },[])
  if(isLoading){
    return <Loading/>
  }
  return (
    <>
     
     <div className='container mx-auto'>
      <div className='mt-10'>
        <h2 className='text-2xl mb-4'>Brands</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          {Brands?.map((brand) => (
            <div key={brand._id} className='border p-4'>
              <img src={brand.image} alt={brand.name} className='w-full h-20 object-contain mb-2' />
              <p className='text-center'>{brand.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}



