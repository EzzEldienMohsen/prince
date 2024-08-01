import React from 'react';
import theSrc from '../assets/svg/mainPage/aboutus.svg';
import check from '../assets/svg/mainPage/check.svg';
import stars from '../assets/svg/mainPage/stars.svg';
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';
import { useGlobalData } from '../context/GlobalDataContext';
import { useGlobalContext } from '../context/GlobalContext';


const AboutMainImage = ({data}) => {
  const src = data?.about_company_image || theSrc
const {t} = useTranslation()
const {isArabic} = useGlobalContext()
  const bottom = [
    {
      id: nanoid(),
      key: 'cardVillaDesign',
      number: '+' + data?.villa ,
    },
    {
      id: nanoid(),
      key: 'cardInteriorDesign',
      number: '+'+ data?.indoor ,
    },
  ];

  return (
    <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col justify-center items-center relative ">
      <img src={src} alt="image"/>
      <div className={`absolute gap-y-2 py-8 md:py-2 lg:py-8 -top-24 md:-top-20 ${isArabic? "left-6 md:left-8" : "right-6 md:right-8"} bg-[#FEFEFF] flex flex-col justify-center items-center w-30 lg:w-32`}>
        <img src={check} alt="check" />
        <h1 className="text-4xl font-tajawal font-normal text-theFontColor">
          {data?.rating}
        </h1>
        <img src={stars} alt="stars" className='w-4/5' />
        <p className="text-theDGray font-tajawal text-sm font-normal lg:text-lg">
          {t('cardHappy')}
        </p>
        <p className="text-theFontColor font-tajawal">
          <span>{data?.reviews}</span>+<span> {t('Reviews')}</span>
        </p>
      </div>
      <div className={`absolute bottom-0 ${isArabic ? "right-0" :"left-0"} py-4 w-3/4 gap-x-4 bg-white px-4 flex justify-evenly items-center`}>
        {bottom.map((link) => (
          <div
            key={link.id}
            className="flex justify-between items-center gap-x-2"
          >
            <h2 className="font-tajawal text-theFontColor">{t(link.key)}</h2>
            <h1 className="text-xl md:text-3xl font-tajawal font-bold text-theRed text-center align-text-top">
              {link.number}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMainImage;
