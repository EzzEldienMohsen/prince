import React from 'react'
import { MainButtons } from '../subSubComponent';
import { useTranslation } from 'react-i18next';

const MainHeroInfo = () => {
  const {t} = useTranslation()
  return (
    <div className="w-full mt-6 lg:mt-0 md:w-1/2 flex flex-col justify-center items-start gap-y-4 md:gap-y-6 lg:gap-y-8">
      <p className="font-tajawal text-theRed">{t('mainPageHeroFirstLine')}</p>
      <h1 className="text-black font-tajawal font-normal text-2xl md:text-5xl ">
        {t('mainPageTitle')}
      </h1>
      <h3 className="text-theRed font-tajawal font-normal text-xl md:text-3xl lg:5xl">
        {t('mainPageHeroSecondRedLine')}
      </h3>
      <p className="text-theDGray w-full font-tajawal font-normal md:text-2xl">
        {t('mainPageHeroTextAndOthers')}{' '}
      </p>
      <MainButtons />
    </div>
  );
}

export default MainHeroInfo