import React from 'react'
import { MainButtons } from '../subSubComponent';

const MainHeroInfo = () => {
  return (
    <div className="w-full mt-6 lg:mt-0 lg:w-2/5 flex flex-col justify-center items-start gap-y-4 md:gap-y-6 lg:gap-y-8">
      <p className="font-tajawal text-theRed">هل تتطلع لبناء منزل أحلامك؟</p>
      <h1 className="text-black font-tajawal font-bold text-2xl md:text-5xl lg:text-3xl">
        شركة برنس للاستشارات الهندسية
      </h1>
      <h3 className="text-theRed font-tajawal font-bold text-lg md:text-xl">
        نصمم بابتكار بعيداً عن التكرار
      </h3>
      <p className="text-theDGray font-tajawal font-extraLight md:text-2xl">
        تقدم لكم شركة برنس تصاميم معمارية مميزة وديكورات داخلية فريدة بالإضافة
        للاشراف الهندسي الفعال على جميع انواع المباني بخبرة تتجاوز 25 عام ...
      </p>
      <MainButtons/>
    </div>
  );
}

export default MainHeroInfo