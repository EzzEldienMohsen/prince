import React from 'react'
import { FAQsComponent } from '../subComponent';

const FAQSection = () => {
  return (
    <div className="w-full flex bg-theLGray flex-col justify-center items-center px-8 lg:px-16 my-16 py-10 gap-y-6 md:gap-y-8 lg:gap-y-12 text-center">
      <p className="font-tajawal font-light text-theRed text-lg md:text-2xl">
        FAQs
      </p>
      <h1 className="font-bold font-tajawal text-black text-xl md:text-3xl">
        الأسألة المتكررة
      </h1>
      <FAQsComponent/>
    </div>
  );
}

export default FAQSection