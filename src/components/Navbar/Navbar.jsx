
import React, { useEffect, useState } from 'react';
import Style from './Navbar.module.css';
import logo from '../../assets/images/logo.svg'
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { FaCartArrowDown } from "react-icons/fa";
import { CartContext } from '../../context/CartContext';

export default function Navbar() {
  // const [cartCount, setCartCount] = useState(0);
  let {cartCount, setCartCount } = useContext(CartContext)
  // async function GetCart() {
  //   let {data} = await getuserCart();
  //    console.log(data);
  //   //  setcartDetails(data);
  //    setCartCount(data.numOfCartItems);

  //  }
  let navIgate = useNavigate();
    useEffect(()=>{
      // GetCart();
    } , []);
   let {Userlogin , setUserlogin} = useContext(UserContext);
   function logOut() {
    localStorage.removeItem('userToken');
    setUserlogin(null);
    navIgate('/login')
   }
  return <>
<nav className="bg-gray-100 border-gray-200 py-2.5 dark:bg-gray-900 z-80 ">
  <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">

   
   <NavLink  to={'/'} className="flex items-center">
    <img src={logo} width={100} alt="fresh cart logo " />
    </NavLink>


    <div className="flex items-center lg:order-2">
      <div className="hidden mt-2 mr-4 sm:inline-block">
        <span />
      </div>
      <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="true">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
    <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
      {
            Userlogin !== null ?  
            <>
             <li  className="block py-2 pl-3 pr-4 text-white bg-green-700 rounded lg:bg-transparent lg:text-green-700 lg:p-0 dark:text-white" aria-current="page" ><NavLink to={'/'}> Home </NavLink></li>
            {/* <li className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><NavLink to={'/about'}> About </NavLink></li> */}
            <li className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><NavLink to={'/categories'}> Categories </NavLink></li>
            <li className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><NavLink to={'/products'}> Products </NavLink></li>                 
            <li className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><NavLink to={'/allorders'}> Orders </NavLink></li>                 

              <li className=" block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><NavLink to={'/cart'}>  <div className="flex"> 
                  <FaCartArrowDown className='text-green-600 mt-1' /><span className='border w-4 h-4 rounded-[50%] text-orange-500 border-orange-600 p-1 items-center justify-center flex'>{cartCount}</span></div>
           </NavLink></li>
            
            </>   : null  
          }
      
      </ul>
      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">

        {
          Userlogin === null ?
          <>
            <li className='text-md mx-4 text-slate-900 font-normal '><NavLink to={'/login'}> Login </NavLink></li>
          <li className='text-md mx-4 text-slate-900 font-normal '><NavLink to={'/register'}> Register </NavLink></li>
          </>:<li onClick={logOut}  className="xl:ml-5 block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0
               dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer"><span> Logout </span></li>

        }
          <li className='text-md mx-4 text-slate-900 font-normal  items-center flex justify-between lg:flex-row lg:space-x-8 lg:mt-0 sm:mt-6'>
            <i className='fab fa-facebook mx-2 fa-sm'></i>
            <i className='fab fa-twitter mx-2 fa-sm'></i>
            <i className='fab fa-instagram mx-2 fa-sm'></i>
            <i className='fab fa-tiktok mx-2 fa-sm'></i>
            <i className='fab fa-youtube mx-2 fa-sm'></i>
          </li>
        </ul>
    </div>
  </div>
</nav>


<script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script>



 </>
}










