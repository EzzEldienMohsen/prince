import React from 'react'
import { MainButtons } from '../subSubComponent';

const AboutMainInfo = () => {
  return (
    <div className="w-full mt-6 lg:mt-0 lg:w-2/5 flex flex-col justify-center items-start gap-y-4 md:gap-y-6 lg:gap-y-8">
      <p className="font-tajawal text-theRed text-2xl">من نحن</p>
      <h1 className="text-black font-tajawal font-bold text-2xl md:text-5xl lg:text-3xl">
        شركة برنس للاستشارات الهندسية
      </h1>

      <p className="text-theDGray font-tajawal font-extraLight md:text-2xl">
        شركة برنس للاستشارات الهندسية من الشركات الرائدة التي تأسست في دولة
        الامارات العربية المتحدة وهي متخصصة في جميع انواع المباني السكنية
        والتجارية و الصناعية ولديها الخبرة الكافية في المشاريع الكبيرة و الصغيرة
        بخبرة تتجاوز ٢٥ سنة .
      </p>
      <MainButtons />
    </div>
  );
}

export default AboutMainInfo