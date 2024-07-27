import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../component';
import { useGlobalData } from '../context/GlobalDataContext';

const Home = () => {
  const { data, isLoading } = useGlobalData();
  
  if (isLoading) {
    return <div>Loading...</div>; // Display a loading indicator while data is being fetched
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <Header data={data?.layout} />
      <Outlet />
      <Footer data={data?.layout} />
    </div>
  );
};

export default Home;
