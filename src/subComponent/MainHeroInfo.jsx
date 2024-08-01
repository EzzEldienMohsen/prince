import React from 'react'
import { MainButtons } from '../subSubComponent';
import { useTranslation } from 'react-i18next';
import { useGlobalData } from '../context/GlobalDataContext';

const MainHeroInfo = () => {
  const {data} =useGlobalData()
  const {t} = useTranslation()
  return (
    <div className="w-full mt-6 lg:mt-0 lg:w-2/5 flex flex-col justify-center items-start gap-y-4 lg:gap-y-6 ">
      <p className="font-tajawal text-theRed">{t('mainPageHeroFirstLine')}</p>
      <h1 className="text-theFontColor font-tajawal font-bold text-2xl md:text-2xl lg:text-4xl ">
        {t('mainPageTitle')}
      </h1>
      <h3 className="text-theRed font-tajawal font-bold text-2xl md:text-3xl lg:text-2xl">
        {t('mainPageHeroSecondRedLine')}
      </h3>
      <p className="text-[#7C8893] w-full font-tajawal font-normal md:text-xl">
        {t('mainPageHeroTextAndOthers')}{' '}
      </p>
      <MainButtons data={data.layout} />
    </div>
  );
}

export default MainHeroInfo