import React, { useContext, useEffect, useState } from 'react';
import Style from './Register.module.css';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
// import { UserContext } from '../../context/UserContext';

export default function Register() {
  const [apiError, setapiError] = useState("");
  const [isloading, setIsloading] = useState(false);

  // let {setUserlogin} = useContext(UserContext);
  let navigate = useNavigate();
  let validateRegister = yup.object().shape({
    name: yup.string().min(3,'min length is 3').max(10,'max length is 10').required("name is required"),
    email: yup.string().email('email is invalid').required('email is required'),
    phone: yup.string().matches(/^01[0125][0-9]{8}$/, 'phone must be egyption number').required('phone is required'),
    password: yup.string().matches(/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/ ,'password must include uppercase  letter, lowercase letter, number and special character').required('password is required'),
    rePassword : yup.string().oneOf([yup.ref('password')],'password and rePassword must be same').required('Repassword is required')
  })
  // async function handleRegister (formValues) {
  //   let {data}= await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,formValues)
  //   if (data.message === 'success') {
  //     navigate('/categories')
  //     }
  //     else{
  //         console.log("ERR")
  //     }
  //   console.log(formValues)
  // }
  function handleRegister (formValues) {
    setIsloading(true);
   axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,formValues)
   .then( (res)=>{
    if (res.data.message === 'success') {
      localStorage.setItem('userToken' , res.data.token);
      setUserlogin(res.data.token);
      navigate('/')
      }
    setIsloading(false);
   })
   .catch((res)=>{
    console.log(res);
    // setIsloading(false);
  // setapiError(res?.response?.data?.message)  
  })
  }
  
  

  let formik = useFormik({
    initialValues:{
      name: '',
      phone: '',
      email: '',
      password: '',
      rePassword: ''
    },
    onSubmit: handleRegister, 
    validationSchema: validateRegister
  });

 
 
  useEffect(() => {

  }, []);
  return <>
  <div className="py-6 max-w-xl mx-auto mt-28">
  { apiError ? 
 <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  {apiError}
</div>:null
  }
    <h2 className='text-3xl font-bold mb-6 text-green-600'>Register Now</h2>
      
  <form className="max-w-md mx-auto" onSubmit={formik.handleSubmit}>
  <div className="relative z-0 w-full mb-5 group">
      <input id="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} type="text" name="name"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
      <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
  </div>
  {

formik.errors.name && formik.touched.name ? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
<span class="font-medium">{formik.errors.name}</span> 
</div>
: null
  }

  <div className="relative z-0 w-full mb-5 group">
      <input id="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} type="email" name="email"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
      <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  {

formik.errors.email && formik.touched.email? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
<span class="font-medium">{formik.errors.email}</span> 
</div>
: null
  }
  <div className="relative z-0 w-full mb-5 group">
      <input id="phone" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} type="tel" name="phone"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
      <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>
  </div>
  {

formik.errors.phone && formik.touched.phone ? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
<span class="font-medium">{formik.errors.phone}</span> 
</div>
: null
  }
  <div className="relative z-0 w-full mb-5 group">
      <input id="pass" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} type="text" name="password"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
      <label htmlFor="pass" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">password</label>
  </div>
  {

formik.errors.password && formik.touched.password ? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
<span class="font-medium">{formik.errors.password}</span> 
</div>
: null
  }
  <div className="relative z-0 w-full mb-5 group">
      <input id="rePassword" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.rePassword} type="text" name="rePassword"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
      <label htmlFor="rePassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Repassword</label>
  </div>
  {

formik.errors.rePassword && formik.touched.rePassword ? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
<span class="font-medium">{formik.errors.rePassword}</span> 
</div>
: null
  }
  <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-greene-800">

{isloading ?     <i className='fas fa-spinner  fa-spin'></i> :  " Submit"}  </button>

  </form>
  </div>
  </>
}
