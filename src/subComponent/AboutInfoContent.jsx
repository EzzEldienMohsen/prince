import React from 'react'
import { useTranslation } from 'react-i18next';
import { useGlobalContext } from './../context/GlobalContext';

const AboutInfoContent = ({data}) => {
  const {isArabic} = useGlobalContext()
  const {t} =useTranslation()
  return (
    <div className="w-full lg:w-1/2 flex flex-col items-start justify-center mt-4 lg:mt-0 gap-y-4">
      <div className="w-full flex flex-col justify-center items-start gap-y-4 ">
        <p className="font-tajawal text-theRed text-2xl">
          {t('aboutSecondSectionTitle')}
        </p>
        <h1 className="text-black font-tajawal font-medium text-2xl md:text-3xl ">
          {t('aboutSecondSectionBigTitle')}
        </h1>

        <p className="text-[#7C8893] font-tajawal font-normal md:text-sm">
          {t('aboutAboutText')}
        </p>
        <p
          className={`text-[#7C8893] font-tajawal font-normal md:text-sm ${
            isArabic ? 'mr-4' : 'ml-4'
          } `}
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </div>
    </div>
  );
}

export default AboutInfoContent