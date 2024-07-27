import React from 'react';
import { Carousel } from '../subComponent';
import { useTranslation } from 'react-i18next';

const CarouselSection = () => {
  const {t} = useTranslation()
  return (
    <div className="w-full flex flex-col justify-center items-center py-12 gap-y-6 md:gap-y-8text-center">
      <p className="font-tajawal font-normal text-theRed text-2xl">
        {t('latest')}
      </p>
      <h1 className="font-normal font-tajawal text-black text-3xl">
        {t('mainLatestBigTitle')}
      </h1>
      <Carousel />
    </div>
  );
};

export default CarouselSection;
