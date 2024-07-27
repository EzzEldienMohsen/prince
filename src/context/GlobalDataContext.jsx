import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { autoFetch } from '../utils';
import { useGlobalContext } from './GlobalContext';

const GlobalDataContext = createContext();

export const useGlobalData = () => useContext(GlobalDataContext);

const MAX_RETRIES = 3; // Maximum number of retries
const RETRY_DELAY = 1000; // Initial delay in milliseconds

const fetchDataWithRetry = async (
  endpoint,
  key,
  language,
  setData,
  retries = MAX_RETRIES
) => {
  try {
    const response = await autoFetch(endpoint, {
      headers: {
        locale: language,
        Accept: 'application/json',
      },
    });
    setData((prevData) => ({ ...prevData, [key]: response.data.data }));
  } catch (error) {
    if (error.response && error.response.status === 429 && retries > 0) {
      // Wait for a specified delay before retrying
      await new Promise((resolve) =>
        setTimeout(resolve, RETRY_DELAY * (MAX_RETRIES - retries + 1))
      );
      return fetchDataWithRetry(endpoint, key, language, setData, retries - 1);
    } else {
      // More sophisticated error handling could be added here
      console.error('Error fetching data:', error);
    }
  }
};

export const GlobalDataProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { isArabic } = useGlobalContext();
  const language = isArabic ? 'ar' : 'en';

  const fetchData = useCallback(async (endpoint, key, language) => {
    setIsLoading(true);
    try {
      await fetchDataWithRetry(endpoint, key, language, setData);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const endpoints = [
      { url: '/home/about', key: 'homeAbout' },
      { url: '/contact/cities', key: 'cities' },
      { url: '/home/faqs', key: 'faqs' },
      { url: '/home/news', key: 'news' },
      { url: '/home/projects', key: 'projects' },
    ];

    endpoints.forEach(({ url, key }) => fetchData(url, key, language));
  }, [language, fetchData]);

  return (
    <GlobalDataContext.Provider value={{ data, isLoading, fetchData }}>
      {children}
    </GlobalDataContext.Provider>
  );
};
