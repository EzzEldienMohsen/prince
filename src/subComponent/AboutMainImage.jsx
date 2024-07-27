import React from 'react';
import src from '../assets/svg/mainPage/aboutus.svg';
import check from '../assets/svg/mainPage/check.svg';
import stars from '../assets/svg/mainPage/stars.svg';
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';
import { useGlobalData } from '../context/GlobalDataContext';


const AboutMainImage = () => {
const {t} = useTranslation()
const {data} = useGlobalData();
  const bottom = [
    {
      id: nanoid(),
      key: 'cardVillaDesign',
      number: data?.homeAbout?.villa + '+',
    },
    {
      id: nanoid(),
      key: 'cardInteriorDesign',
      number: data?.homeAbout?.indoor + '+',
    },
  ];

  return (
    <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col justify-center items-center relative">
      <img src={src} alt="image" />
      <div className="absolute gap-y-4 py-8 md:py-6 lg:py-8 -top-24 md:-top-20 left-6 md:left-4 bg-theLGray flex flex-col justify-center items-center w-30 lg:w-40">
        <img src={check} alt="check" />
        <h1 className="text-2xl font-tajawal font-normal text-black">
          {data?.homeAbout?.rating}
        </h1>
        <img src={stars} alt="stars" />
        <p className="text-theDGray font-tajawal text-sm font-extraLight lg:text-lg">
          {t('cardHappy')}
        </p>
        <p className="text-black font-tajawal">
          <span>{data?.homeAbout?.reviews}</span>+<span> {t('Reviews')}</span>
        </p>
      </div>
      <div className="absolute bottom-0 right-0 py-4 gap-x-4 bg-theLGray px-4 flex justify-evenly items-center">
        {bottom.map((link) => (
          <div
            key={link.id}
            className="flex justify-between items-center gap-x-2"
          >
            <h2 className="font-tajawal text-black">{t(link.key)}</h2>
            <h1 className="text-xl font-tajawal font-normal text-theRed">
              {link.number}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMainImage;
