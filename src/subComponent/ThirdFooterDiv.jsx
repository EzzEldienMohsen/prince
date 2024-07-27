import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ThirdFooterDiv = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full  pb-8 bg-theDGray flex font-normal justify-center items-center">
      <div className="border-t-[2px] border-theLGray px-4 lg:px-0 w-full gap-y-4 md:gap-y-0 md:w-[96vw] lg:w-4/5 py-3 md:py-6  flex flex-col justify-center items-center md:flex-row md:justify-between ">
        <p className="text-theLGray font-tajawal">{t('copyWrites')}</p>
        <div className="flex justify-between items-center gap-x-4">
          <Link to="/" className="text-theLGray font-tajawal">
            {t('privacy')}
          </Link>
          <div className="text-theLGray font-tajawal">|</div>
          <Link to="/" className="text-theLGray font-tajawal">
            {t('ownerShip')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThirdFooterDiv;
