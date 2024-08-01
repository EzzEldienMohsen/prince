import React from 'react';
import { useGlobalData } from '../context/GlobalDataContext';
import theDate from '../assets/svg/mainPage/date.svg';
import ImageWithFallback from './ImageWithFallBack';
const SmallCarousel = () => {
  const { data } = useGlobalData();
  return (
    <div className="carousel carousel-vertical md:hidden w-4/5 gap-y-6 bg-white  flex flex-col justify-start items-center">
      {data?.news?.map((link) => {
        return (
          <div
            key={link.id}
            className="carousel-item w-full flex flex-col bg-theLGray justify-center items-start gap-y-3 "
          >
            <ImageWithFallback
              src={link.image}
              alt="proj"
              className="w-full aspect-auto"
            />
            <h1 className="font-tajawal font-normal text-lg text-theFontColor px-2">
              {link.title}
            </h1>
            <p className="text-[#7C8893] font-tajawal font-normal md:text-md px-2 text-start">
              {link.short_content}
            </p>
            <div className="py-2 mx-1 px-1    flex flex-col justify-between items-start w-full">
              <div className="w-11/12 py-[1px] bg-[#E3E3E3] justify-self-center mr-3 "></div>

              {/* the date section */}
              <div className="flex justify-between items-center mt-2 gap-x-1">
                <img src={theDate} alt="date" />
                <p className="text-theDGray font-tajawal font-extraLight md:text-xs px-2">
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

export default SmallCarousel;
