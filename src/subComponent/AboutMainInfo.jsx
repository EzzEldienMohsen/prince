import React from 'react'
import { MainButtons } from '../subSubComponent';
import { useTranslation } from 'react-i18next';
const AboutMainInfo = () => {
  const {t} = useTranslation()
  return (
    <div className="w-full mt-6 lg:mt-0 lg:w-2/5 flex flex-col justify-center items-start gap-y-4 ">
      <p className="font-tajawal text-theRed text-2xl">{t('about')}</p>
      <h1 className="text-black font-tajawal font-normal text-2xl md:text-3xl lg:text-2xl">
        {t('mainPageTitle')}
      </h1>

      <p className="text-theDGray font-tajawal font-normal md:text-md">
        {t('aboutSectionText')}
      </p>
      <MainButtons />
    </div>
  );
}

export default AboutMainInfo