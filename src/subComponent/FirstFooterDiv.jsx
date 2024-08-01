import React from 'react';
import { Link } from 'react-router-dom';
import phone from '../assets/svg/footer/phone.svg';
import src from '../assets/svg/footer/whatsAppButton.svg';
import { useTranslation } from 'react-i18next';
const FirstFooterDiv = ({ data }) => {
  const { t } = useTranslation();
  return (
    <div className="bg-theRed px-5 py-6 gap-y-5  md:px-9 md:py-11  lg:px-48 flex flex-col w-full justify-center md:gap-y-6 items-center lg:flex-row lg:gap-x-2 lg:justify-between lg:py-16">
      <h1 className=" md:text-2xl md:text-4/5 lg:text-xl text-white  md:text-md font-tajawal font-normal lg:w-2/5 text-center lg:text-start">
        {t('firstRedFooter')}
      </h1>
      <div className="flex flex-col lg:w-1/2 justify-center items-center md:flex-row-reverse md:justify-between lg:justify-start md:gap-x-2 mt-4 lg:mt-0">
        <div className="flex justify-between items-center gap-x-2 mb-4 md:mb-0">
          <a href={`https://wa.me/${data.whatsapp_2}`} target="_blank">
            <div className="bg-[#29A71A] text-white font-tajawal px-6 py-4 flex justify-center items-center gap-x-2">
              <p className="text-xs"> {`${data.whatsapp_2} `}</p>
              <img src={src} alt="whatsApp" />
            </div>
          </a>
          <a href={`https://wa.me/${data.whatsapp_1}`} target="_blank">
            <div className="bg-[#29A71A] text-white font-tajawal px-4 py-4 flex justify-center items-center gap-x-2">
              <p className="text-xs"> {`${data.whatsapp_1} `}</p>
              <img src={src} alt="whatsApp" />
            </div>
          </a>
        </div>
        <Link
          to="/"
          className="bg-theDGray text-white font-tajawal px-6 py-4 w-40 flex font-normal justify-center items-center gap-x-2"
        >
          <p className="text-sx">{t('call')}</p>
          <img src={phone} alt="phone" />
        </Link>
      </div>
    </div>
  );
};

export default FirstFooterDiv;
