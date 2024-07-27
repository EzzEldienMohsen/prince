import React from 'react';
import src from '../assets/svg/header/logo.svg';
import { BigNavBar, HeaderButtons, SmallNavBar } from '../subComponent';

const Header = ({data}) => {
  return (
    <div className="px-8 lg:px-16 flex justify-between items-center py-4 lg:bg-theLGray w-full">
      <img src={data?.logo} alt="logo" className="w-1/5" />
      <BigNavBar/>
      <HeaderButtons data={data}/>
      <SmallNavBar/>
    </div>
  );
};

export default Header;
