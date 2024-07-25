import React from 'react';
import { theCarousel } from '../assets';

const BigCarousel = () => {
  return (
    <div className="hidden w-4/5 bg-white lg:w-3/5 md:inline-flex md:carousel md:gap-x-3 lg:gap-x-4 carousel-end ">
      {theCarousel.map((link) => {
        return (
          <div
            key={link.id}
            className="carousel-item w-2/5 mx-4 flex flex-col bg-theLGray justify-center items-start gap-y-3 "
          >
            <img src={link.img} alt="proj" />
            <h1 className="font-tajawal font-bold text-lg text-black px-2">
              {link.title}
            </h1>
            <p className="text-theDGray font-tajawal font-extraLight md:text-md px-2 text-start">
              {link.text}
            </p>
            {/* The Final Div */}
            <div className="py-2 mx-2 px-2 border-t-[2px] border-white flex justify-between items-center w-full">
              {/* the image name section */}
              <div className="flex justify-between items-center gap-x-1">
                <img src={link.engImg} alt="eng" />
                <div className="flex flex-col justify-center items-center gap-y-1">
                  <h1 className="font-tajawal font-bold text-sm text-black px-2">
                    {link.name}
                  </h1>
                  <p className="text-theDGray font-tajawal font-extraLight md:text-xs px-2">
                    {link.job}
                  </p>
                </div>
              </div>
              {/* the date section */}
              <div className="flex justify-between items-center gap-x-1">
                <img src={link.DIcon} alt="date" />
                <p className="text-theDGray font-tajawal font-extraLight md:text-xs px-2">
                  {link.DText}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BigCarousel;
