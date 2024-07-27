import React, { createContext, useContext, useState, useEffect } from 'react';
import { autoFetch } from '../utils';

const GlobalDataContext = createContext();

export const useGlobalData = () => useContext(GlobalDataContext);

export const GlobalDataProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (endpoint, key, language) => {
    try {
      setIsLoading(true);
      const response = await autoFetch(endpoint, {
        headers: {
          locale: language,
          Accept: 'application/json',
        },
      });
      setData((prevData) => ({ ...prevData, [key]: response.data.data }));
      console.log(data,data.layout)
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <GlobalDataContext.Provider value={{ data, isLoading, fetchData }}>
      {children}
    </GlobalDataContext.Provider>
  );
};
