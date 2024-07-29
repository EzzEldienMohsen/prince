import React from 'react'
import { useTranslation } from 'react-i18next';

const SeconSectionCardDesign = ({card}) => {
  const {t} =useTranslation()
  return (
    <div className="flex flex-col gap-y-4 lg:gap-y-0 justify-center items-center  lg:flex-row lg:justify-evenly lg lg:gap-x-2 py-8">
      {card.map((link) => {
        return (
          <div
            key={link.id}
            className="py-6 lg:px-14 flex flex-col text-center justify-center items-center gap-y-6  bg-white shadow-xl w-full lg:w-2/5"
          >
            <img src={link.img} alt={link.title} />
            <h1 className="text-theFontColor font-tajawal font-normal text-2xl ">
              {t(link.title)}
            </h1>
            <p className="text-[#7C8893] text-xs font-tajawal font-normal md:text-xl lg:text-lg md:w-4/5 lg:w-full">
              {t(link.text)}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default SeconSectionCardDesign