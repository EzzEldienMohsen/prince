import React from 'react'
import calender from '../assets/svg/mainPage/date.svg';
import { useGlobalContext } from '../context/GlobalContext';
import { ImageWithFallBack } from '../subSubComponent';
const SingleNewsContent = ({data}) => {
      const { isArabic } = useGlobalContext();
 
  return (
    <div className=" w-full  flex flex-col px-8 lg:px-16  justify-center  items-start gap-y-3 ">
      <ImageWithFallBack src={data.image} alt="proj" className="w-full lg:h-[522px] md:h-[369px] h-[181px]" />
      <div className="flex justify-between items-center gap-x-1">
        <img src={calender} alt="eng" />
        <p className="text-[#7C8893] font-tajawal font-normal md:text-xs px-2">
          {data.date}
        </p>
      </div>
      <h1 className="font-tajawal font-normal text-xl text-theFontColor px-3">
        {data.title}
      </h1>
      <p
        className={`text-[#7C8893] font-tajawal font-normal md:text-md  `}
        dangerouslySetInnerHTML={{ __html: data.content }}
      />
      <p
        className={`text-[#7C8893] font-tajawal font-normal md:text-md px-2 mt-2 ${
          isArabic ? 'mr-4' : 'ml-4'
        }`}
      >
        {data.short_content}
      </p>
      <div className="py-2 mx-2 px-2  flex flex-col justify-start items-start w-full">
        <div className="w-11/12 py-[1px] bg-[#E3E3E3] justify-self-center mr-2"></div>
      </div>
    </div>
  );
}

export default SingleNewsContent