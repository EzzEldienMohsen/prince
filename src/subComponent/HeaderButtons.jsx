import React from 'react'
import { useGlobalContext } from './../context/GlobalContext';
import src from "../assets/svg/header/whatsApp.svg"
const HeaderButtons = () => {
    const {isArabic,toggleLang} = useGlobalContext()
  return (
    <div className="hidden lg:flex justify-between items-center gap-x-2">
      <button
        onClick={toggleLang}
        className="avatar rounded-full mx-4 p-2 bg-white text-theRed font-extraLight"
      >
        {isArabic ? 'E N' : 'A R'}
      </button>
      <a href="" target="_blank">
        <img src={src} alt="whatsApp" />
      </a>
      <a href="" target="_blank">
        <img src={src} alt="whatsApp" />
      </a>
    </div>
  );
}

export default HeaderButtons