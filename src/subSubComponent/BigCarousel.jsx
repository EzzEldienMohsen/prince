import React from 'react';
import theDate from '../assets/svg/mainPage/date.svg';
import { useGlobalData } from '../context/GlobalDataContext';

const BigCarousel = () => {
  const {data} =useGlobalData();
  return (
    <div className="hidden w-4/5 bg-white  md:inline-flex md:carousel md:gap-x-3 lg:gap-x-4 carousel-end ">
      {data?.news?.map((link) => {
        return (
          <div
            key={link.id}
            className="carousel-item w-2/5 lg:w-[265px]  flex flex-col bg-theLGray justify-center items-start gap-y-3 "
          >
            <img src={link.image} alt="proj" />
            <h1 className="font-tajawal font-normal text-lg text-black px-2">
              {link.title}
            </h1>
            <p className="text-theDGray font-tajawal font-normal md:text-md px-2 text-start">
              {link.content}
            </p>
            {/* The Final Div */}
            <div className="py-2 mx-2 px-2 border-t-[2px] border-white flex justify-between items-center w-full">
              {/* the image name section */}
              <div className="flex justify-between items-center gap-x-1">
                <div className="flex flex-col justify-center items-center gap-y-1">
                  <h1 className="font-tajawal font-normal text-xs text-black px-2">
                    {link.short_content}
                  </h1>
                </div>
              </div>
              {/* the date section */}
              <div className="flex justify-between items-center gap-x-1">
                <img src={theDate} alt="eng" />
                <p className="text-theDGray font-tajawal font-normal md:text-xs px-2">
                  {link.date}
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
