import React from 'react';
import layout from '../assets/svg/mainPage/layout.svg';

const TheImageSection = () => {
  return (
    <div className="flex flex-col my-16  justify-center  items-center md:flex-row md:justify-between w-full relative gap-y-8 md:gap-y-0 pt-8 md:py-8 ">
      <div className="absolute top-0 right-0 w-full md:w-11/12 lg:w-3/4 h-full bg-theRed -z-10 "></div>
      <h1 className="text-white text-xl px-8 lg:px-16 md:text-3xl lg:text-4xl font-tajawal font-extraBold text-center md:text-start">
        للشركة حضوراً فعالاً في كافة المعارض والمؤتمرات الخاصة بالبناء
      </h1>
      <img src={layout} alt="layout" className="w-4/5 -mb-10 md:mb-0 md:w-1/2" />
    </div>
  );
};

export default TheImageSection;
