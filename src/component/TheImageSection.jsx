import React from 'react';
import layout from '../assets/svg/mainPage/layout.svg';

const TheImageSection = () => {
  return (
    <div className="w-full py-16">
      <div className="relative w-full gap-y-10 md:gap-y-0 md:h-[350px] lg:h-[500px] md:w-3/5 bg-theRed pt-8 md:py-8 flex flex-col justify-center items-center md:flex-row md:justify-start">
        {/* Content will be here */}
        <h1 className="text-white font-tajawal md:text-start w-4/5 px-8 lg:px-16 font-semiBold text-2xl md:text-3xl lg:text-4xl text-center">
          {' '}
          للشركة حضوراً فعالاً في كافة المعارض والمؤتمرات الخاصة بالبناء
        </h1>
        <div className="md:absolute flex justify-center md:justify-normal  md:top-1/2 md:transform md:-translate-y-1/2 md:translate-x-[-75%] ">
          <img src={layout} alt="alt" className="w-4/5 -mb-8 md:w-4/5 md:mb-0 " />
        </div>
      </div>
    </div>
  );
};

export default TheImageSection;
