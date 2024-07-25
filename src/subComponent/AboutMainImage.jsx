import React from 'react';
import src from '../assets/svg/mainPage/aboutus.svg';
import check from '../assets/svg/mainPage/check.svg';
import stars from '../assets/svg/mainPage/stars.svg';
import { nanoid } from 'nanoid';

const bottom = [
  { id: nanoid(), text: 'تصميم فيلا', number: '550+' },
  { id: nanoid(), text: 'تصميم داخلي', number: '250+' },
];

const AboutMainImage = () => {
  return (
    <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col justify-center items-center relative">
      <img src={src} alt="image" />
      <div className="absolute gap-y-4 py-8 md:py-6 lg:py-8 -top-24 md:-top-20 left-6 md:left-4 bg-theLGray flex flex-col justify-center items-center w-30 lg:w-40">
        <img src={check} alt="check" />
        <h1 className="text-2xl font-tajawal font-normal text-black">4.8</h1>
        <img src={stars} alt="stars" />
        <p className="text-theDGray font-tajawal text-sm font-extraLight lg:text-lg">
          عميل سعيد
        </p>
        <p className="text-black font-tajawal">500+ Reviews </p>
      </div>
      <div className="absolute bottom-0 right-0 py-4 gap-x-4 bg-theLGray px-4 flex justify-evenly items-center">
        {bottom.map((link) => (
          <div
            key={link.id}
            className="flex justify-between items-center gap-x-2"
          >
            <h2 className="font-tajawal text-black">{link.text}</h2>
            <h1 className="text-xl font-tajawal font-normal text-theRed">
              {link.number}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMainImage;
