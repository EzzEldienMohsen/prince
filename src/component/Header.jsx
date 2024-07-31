import React from 'react';
import SmallNavBar from '../subComponent/SmallNavBar';
import src from '../assets/svg/header/menuButton.svg';
import { BigNavBar, HeaderButtons } from '../subComponent';
import { useGlobalContext } from '../context/GlobalContext';

const Header = ({ data }) => {
  const {isArabic} = useGlobalContext()
  return (
    <div className="px-8 lg:px-16 flex justify-between items-center py-4 lg:bg-theLGray w-full">
      <img src={data.logo} alt="logo" className="w-1/5" />
      <BigNavBar />
      <HeaderButtons data={data} />

      {/* Drawer Implementation */}
      <div className="drawer w-[18px]  lg:hidden">
        <input
          id="small-nav-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          {/* Drawer button */}
          <label htmlFor="small-nav-drawer" className="">
            <img
              src={src}
              alt="menu"
              className={isArabic ? 'transform scale-x-[-1]' : ''}
            />
          </label>
        </div>
        <div className="drawer-side z-30">
          <label htmlFor="small-nav-drawer" className="drawer-overlay"></label>
          <SmallNavBar data={data} />
        </div>
      </div>
    </div>
  );
};

export default Header;
