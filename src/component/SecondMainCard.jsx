import React from 'react';
import { expertise } from '../assets';
import { useTranslation } from 'react-i18next';
import { SeconSectionCardDesign } from '../subComponent';

const SecondMainCard = () => {
  const {t} = useTranslation()
  return (
    <div className="flex flex-col w-full bg-theLGray h-[788px] md:h-[990px] lg:h-[740px] justify-center px-8 lg:px-16 my-16 py-20 items-center gap-y-6 lg:gap-y-6">
      <h1 className="text-theRed text-xl md:text-3xl font-tajawal font-extraBold">
        {t('mainSpecialTitle')}
      </h1>
      <p className="text-[#7C8893] w-4/5 font-tajawal font-extraLight md:text-2xl text-center">
        {t('mainPageHeroTextAndOthers')}
      </p>
      <SeconSectionCardDesign card={expertise} />
    </div>
  );
};

export default SecondMainCard;
