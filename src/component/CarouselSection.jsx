import React from 'react';
import Carousel from '../subComponent/Carousel';

const CarouselSection = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-12 gap-y-6 md:gap-y-8 lg:gap-y-12 text-center">
      <p className="font-tajawal font-light text-theRed text-2xl">اخر الاخبار</p>
      <h1 className="font-bold font-tajawal text-black text-3xl">
        جديد الشركة
      </h1>
      <Carousel/>
    </div>
  );
};

export default CarouselSection;
