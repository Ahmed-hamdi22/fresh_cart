import React, { useEffect, useState } from 'react';
import Style from './Home.module.css';
import { ConterContext } from '../../context/CounterContext';
import { useContext  } from 'react';
import RecntProducts from '../RecntProduct/RecntProducts';
import CatrgorySlider from '../Categories/CatrgorySlider'
import MainSlider from '../Slider/MainSlider';

export default function Home() {
    const [counter, setCounter] = useState(0);
    useEffect(()=>{

    } , []);

    let {count ,changeCount} = useContext(ConterContext);
  return <>
    {/* <h1 className='bg-orange-200'>Home {count}</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi eligendi accusantium libero quae sit ex reiciendis eaque voluptatem. Sed architecto, voluptatibus ab nobis praesentium laudantium consequatur assumenda error odio maiores!</p>
    
    
      <button className='bg-slate-500  m-2 p-5  rounded' onClick={changeCount}>click</button> */}
    <MainSlider/>
    <CatrgorySlider/>
    <RecntProducts/>
  </>
}
