import React from 'react'
import { useGlobalContext } from './../context/GlobalContext';
import src from "../assets/svg/header/whatsApp.svg"
const HeaderButtons = ({data}) => {
    const {isArabic,toggleLang} = useGlobalContext()
  return (
    <div className="hidden lg:flex justify-between items-center gap-x-2">
      <button
        onClick={toggleLang}
        className="avatar rounded-full mx-4 p-2 bg-white text-theRed font-tajawal font-normal shadow-lg"
      >
        {isArabic ? 'EN' : 'AR'}
      </button>
      <a href={`https://wa.me/${data.whatsapp_1}`} target="_blank">
        <img src={src} alt="whatsApp" />
      </a>
      <a href={`https://wa.me/${data.whatsapp_2}`} target="_blank">
        <img src={src} alt="whatsApp" />
      </a>
    </div>
  );
}

export default HeaderButtons