import React from 'react';
import { useGlobalData } from '../context/GlobalDataContext';
import theDate from '../assets/svg/mainPage/date.svg';

const SmallCarousel = () => {
  const { data } = useGlobalData();
  return (
    <div className="carousel carousel-vertical md:hidden w-4/5 gap-y-6 bg-white h-[600px] flex flex-col justify-start items-center">
      {data?.news?.map((link) => {
        return (
          <div
            key={link.id}
            className="carousel-item w-full flex flex-col bg-theLGray justify-center items-start gap-y-3 "
          >
            <img src={link.image} alt="project" />
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
                  <h1 className="font-tajawal font-normal text-sm text-black px-2">
                    {link.short_content}
                  </h1>
                </div>
              </div>
              {/* the date section */}
              <div className="flex justify-between items-center gap-x-1">
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
