import React from 'react';
import { expertise } from '../assets';
import { useTranslation } from 'react-i18next';

const SecondMainCard = () => {
  const {t} = useTranslation()
  return (
    <div className="flex flex-col w-full bg-theLGray justify-center px-8 lg:px-16 my-16 py-20 items-center gap-y-6 lg:gap-y-6">
      <h1 className="text-theRed text-xl md:text-3xl font-tajawal font-extraBold">
        {t('mainSpecialTitle')}{' '}
      </h1>
      <p className="text-theDGray font-tajawal font-extraLight md:text-2xl text-center">
        {t('mainPageHeroTextAndOthers')}
      </p>
      <div className="flex flex-col gap-y-4 lg:gap-y-0 justify-center items-center  lg:flex-row lg:justify-evenly lg lg:gap-x-4 py-8">
        {expertise.map((link) => {
          return (
            <div
              key={link.id}
              className="py-4 px-14 flex flex-col text-center justify-center items-center gap-y-3 aspect-square bg-white shadow-xl w-4/5 lg:w-3/5"
            >
              <img src={link.img} alt={link.title} />
              <h1 className="text-black font-tajawal font-normal text-2xl ">
                {t(link.title)}
              </h1>
              <p className="text-theDGray font-tajawal font-normal md:text-2xl">
                {t(link.text)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SecondMainCard;
