import React from 'react'
import play from '../assets/svg/mainPage/play.svg';
import src from '../assets/svg/mainPage/whatsApp.svg';
const MainButtons = () => {
  return (
    <div className="flex justify-start items-center gap-x-4 md:gap-x-6 lg:gap-x-8">
      <button className="bg-theRed text-white font-tajawal flex justify-center items-center gap-x-2 py-5 px-8">
        <p>فيديو تعريفي</p>
        <img src={play} alt="play" />
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

export default MainButtons