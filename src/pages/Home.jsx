import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../component';
import { autoFetch } from '../utils';
import { useGlobalContext } from '../context/GlobalContext';

const Home = () => {
  const { isArabic } = useGlobalContext();
  const [data, setData] = useState(null); // State for data
  const [isLoading, setIsLoading] = useState(true); // State for loading
  const language = isArabic ? 'ar' : 'en';

  useEffect(() => {
    const fetchLayout = async () => {
      try {
        const response = await autoFetch(`/layout`, {
          headers: {
            locale: language,
            Accept: 'application/json',
          },
        });
        const fetchedData = response.data.data;
        console.log(fetchedData, language);
        setData(fetchedData); // Update the state with fetched data
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false); // Set loading to false once the fetch is complete
      }
    };

    fetchLayout();
  }, [language]);

  if (isLoading) {
    return <div>Loading...</div>; // Display a loading indicator while data is being fetched
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <Header data={data} />
      <Outlet />
      <Footer data={data} />
    </div>
  );
};

export default Home;
