import React from 'react';
import { expertise } from '../assets';

const SecondMainCard = () => {
  return (
    <div className="flex flex-col w-full bg-theLGray justify-center px-8 lg:px-16 my-16 py-20 items-center gap-y-6 lg:gap-y-6">
      <h1 className="text-theRed text-xl md:text-3xl font-tajawal font-medium">
        خدمات متميزة
      </h1>
      <p className="text-theDGray font-tajawal font-extraLight md:text-2xl text-center">
        تقدم لكم شركة برنس تصاميم معمارية مميزة وديكورات داخلية فريدة بالإضافة
        للاشراف الهندسي الفعال على جميع انواع المباني بخبرة تتجاوز 25 عام ...
      </p>
      <div className="flex flex-col gap-y-4 lg:gap-y-0 justify-center items-center  lg:flex-row lg:justify-evenly lg lg:gap-x-4 py-8">
        {expertise.map((link) => {
          return (
            <div
              key={link.id}
              className="py-4 px-14 flex flex-col text-center justify-center items-center gap-y-3 aspect-square bg-white shadow-xl w-4/5 lg:w-2/5"
            >
              <img src={link.img} alt={link.title} />
              <h1 className="text-black font-tajawal font-bold text-2xl ">
                {link.title}
              </h1>
              <p className="text-theDGray font-tajawal font-extraLight md:text-2xl">{link.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SecondMainCard;
