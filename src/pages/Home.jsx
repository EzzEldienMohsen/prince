import React from 'react'
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../component';
import { useGlobalContext } from '../context/GlobalContext';

const Home = () => {
  const {isArabic} = useGlobalContext()
  return (
    <div className='flex flex-col justify-center items-center' dir={isArabic?'rtl' :"ltr"}>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Home