import React from 'react';
import { Carousel } from '../subComponent';
import { useTranslation } from 'react-i18next';

const CarouselSection = () => {
  const {t} = useTranslation()
  return (
    <div className="w-full flex flex-col justify-center items-center py-12 gap-y-6 md:gap-y-8 lg:gap-y-12 text-center">
      <p className="font-tajawal font-light text-theRed text-2xl">
        {t('latest')}
      </p>
      <h1 className="font-bold font-tajawal text-black text-3xl">
        {t('mainLatestBigTitle')}
      </h1>
      <Carousel />
    </div>
  );
};

export default CarouselSection;
