import React from 'react'
import { FAQsComponent } from '../subComponent';
import { useTranslation } from 'react-i18next';

const FAQSection = () => {
  const {t} =useTranslation()
  return (
    <div className="w-full flex bg-theLGray justify-center items-center">
      <div className=" flex w-full lg:w-3/4 flex-col justify-center items-center px-8 lg:px-16 my-16 py-10 gap-y-6 md:gap-y-8 text-center">
        <p className="font-tajawal font-normal text-theRed text-lg md:text-2xl">
          FAQs
        </p>
        <h1 className="font-semiBold font-tajawal text-theFontColor text-xl md:text-3xl">
          {t('faqs')}
        </h1>
        <FAQsComponent />
      </div>
    </div>
  );
}

export default FAQSection