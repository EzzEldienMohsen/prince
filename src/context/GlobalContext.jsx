import React, { createContext, useContext, useState } from 'react';
const GlobalContext =createContext (undefined);
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};


export const GlobalProvider = ({
  children,
}) => {
 

  const [isArabic, setIsArabic] =useState(() => {
      const lang = localStorage.getItem('lang');
      return lang !== null ? JSON.parse(lang) : true;
    });

 

  const toggleLang = () => {
    setIsArabic((prev) => {
      const newLang = !prev;
      localStorage.setItem('lang', JSON.stringify(newLang));
      return newLang;
    });
  };

  return (
    <GlobalContext.Provider
      value={{  isArabic, toggleLang }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
