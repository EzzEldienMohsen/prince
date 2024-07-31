import React from 'react'
import play from '../assets/svg/mainPage/play.svg';
import src from '../assets/svg/mainPage/whatsApp.svg';
import { useGlobalData } from './../context/GlobalDataContext';
import { useTranslation } from 'react-i18next';
const MainButtons = () => {
  const {t} = useTranslation()
  const {data,isLoading} =useGlobalData()


   if (isLoading) {
     return (
       <div className="w-full aspect-square flex justify-center items-center">
         <span className="loading loading-spinner text-theRed loading-xl"></span>
       </div>
     );
   }
  return (
    <div className="flex justify-start items-center gap-x-4">
      <a target="_blank" href={data?.homeAbout?.intro_video}>
        <button className="bg-theRed text-white font-tajawal flex justify-center items-center gap-x-2 py-5 px-8">
          <p>{t('mainPageButtopn')} </p>
          <img src={play} alt="play" />
        </button>
      </a>
      <a href={`https://wa.me/${data?.layout?.whatsapp_1}`} target="_blank">
        <img src={src} alt="whatsApp" />
      </a>
      <a href={`https://wa.me/${data?.layout?.whatsapp_2}`} target="_blank">
        <img src={src} alt="whatsApp" />
      </a>
    </div>
  );
}

export default MainButtons