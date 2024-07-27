import React from 'react';
import { Link } from 'react-router-dom';
import phone from '../assets/svg/footer/phone.svg';
import src from '../assets/svg/footer/whatsAppButton.svg';
import { useTranslation } from 'react-i18next';
const FirstFooterDiv = ({ data }) => {
  const {t} = useTranslation()
  return (
    <div className="bg-theRed px-8 lg:px-16 flex flex-col justify-center items-center lg:flex-row lg:justify-between py-6">
      <h1 className="text-xl text-white  md:text-2xl font-tajawal font-semiBold lg:w-1/2 text-center lg:text-start">
        {t('firstRedFooter')}
      </h1>
      <div className="flex flex-col justify-center items-center md:flex-row-reverse md:justify-between md:gap-x-2 mt-4 lg:mt-0">
        <div className="flex justify-between items-center gap-x-2 mb-4 md:mb-0">
          <div className="bg-[#29A71A] text-white font-tajawal px-6 py-4 flex justify-center items-center gap-x-2">
            <p className="text-xs"> {`${data?.whatsapp_2} +`}</p>
            <a href={`https://wa.me/${data?.whatsapp_2}`} target="_blank">
              <img src={src} alt="whatsApp" />
            </a>
          </div>
          <div className="bg-[#29A71A] text-white font-tajawal px-6 py-4 flex justify-center items-center gap-x-2">
            <p className="text-xs"> {`${data?.whatsapp_1} +`}</p>
            <a href={`https://wa.me/${data?.whatsapp_1}`} target="_blank">
              <img src={src} alt="whatsApp" />
            </a>
          </div>
        </div>
        <Link
          to="/"
          className="bg-theDGray text-white font-tajawal px-6 py-4 flex font-normal justify-center items-center gap-x-2"
        >
          <p className="text-sx">{t("call")}</p>
          <img src={phone} alt="phone" />
        </Link>
      </div>
    </div>
  );
};

export default FirstFooterDiv;
