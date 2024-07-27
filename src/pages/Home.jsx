import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../component';
import { useGlobalContext } from '../context/GlobalContext';
import { useGlobalData } from '../context/GlobalDataContext';

const Home = () => {
  const { isArabic } = useGlobalContext();
  const { data, isLoading, fetchData } = useGlobalData();
  const language = isArabic ? 'ar' : 'en';

  useEffect(() => {
    fetchData('/layout', 'layout', language);
  }, [language]);

  if (isLoading) {
    return <div>Loading...</div>; // Display a loading indicator while data is being fetched
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <Header data={data.layout} />
      <Outlet />
      <Footer data={data.layout} />
    </div>
  );
};

export default Home;
