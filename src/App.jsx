import { useState } from 'react'
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import Brands from './components/Brands/Brands';
import Categories from './components/Categories/Categories';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Notfound from './components/Notfound/Notfound';
import ConterContextProvider, { ConterContext } from './context/CounterContext';
import UserContextProvider from './context/UserContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import ProductDetails from './components/productDetails/ProductDetails';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import CartContextProvider from './context/CartContext';
CartContextProvider
let router = createBrowserRouter([
  {path:'' , element:<Layout/> , children:[
    {index:true , element:<ProtectedRoute> <Home/></ProtectedRoute>},
    {path:'products' , element:<ProtectedRoute><Products/></ProtectedRoute>},
    {path:'cart' , element:<ProtectedRoute><Cart/></ProtectedRoute>},
    {path:'brands' , element:<ProtectedRoute><Brands/></ProtectedRoute>},
    {path:'categories' , element:<ProtectedRoute><Categories/></ProtectedRoute>},
    {path:'ProductDetails/:id/:category' , element:<ProtectedRoute><ProductDetails/></ProtectedRoute>},

    {path:'login' , element:<Login/>},
    {path:'register' , element:<Register/>},
    {path:'*' , element:<Notfound/>},
  ]}
])
let query = new QueryClient();

function App() {
  const [count, setCount] = useState(0)
  return   <CartContextProvider> 
   <QueryClientProvider client={query}>
    <ConterContextProvider>
  <UserContextProvider>
  <ConterContextProvider>
<RouterProvider router={router}></RouterProvider>
 </ConterContextProvider>
</UserContextProvider>
<ReactQueryDevtools/>
</ConterContextProvider>
  </QueryClientProvider>
   </CartContextProvider> 

 
}

export default App

