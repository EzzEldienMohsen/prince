import React from 'react';
import src from "../assets/svg/secondaryPages/AboutFinalImage.svg"
import { useGlobalContext } from '../context/GlobalContext';
const AboutInfoImage = () => {
    const {isArabic}  = useGlobalContext()
  return (
    <div className="w-full lg:w-1/2 flex justify-center items-center relative py-4 px-4">
      <div
        className={`absolute top-0 ${
          isArabic ? 'right-0' : 'left-0'
        } w-4/5 h-full bg-theRed -z-10 p-2 `}
      ></div>
      <img src={src} aly="alt" />
    </div>
  );
};

export default AboutInfoImage;
