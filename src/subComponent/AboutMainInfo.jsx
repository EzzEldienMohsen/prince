import React from 'react'
import { MainButtons } from '../subSubComponent';
import { useTranslation } from 'react-i18next';
const AboutMainInfo = () => {
  const {t} = useTranslation()
  console.log('About Section Text:', t('aboutSectionText'));
  return (
    <div className="w-full mt-6 lg:mt-0 lg:w-2/5 flex flex-col justify-center items-start gap-y-4 md:gap-y-6 lg:gap-y-8">
      <p className="font-tajawal text-theRed text-2xl">{t('about')}</p>
      <h1 className="text-black font-tajawal font-bold text-2xl md:text-5xl lg:text-3xl">
        {t('mainPageTitle')}
      </h1>

      <p className="text-theDGray font-tajawal font-extraLight md:text-2xl">
        {t('aboutSectionText')}
      </p>
      <MainButtons />
    </div>
  );
}

export default AboutMainInfo