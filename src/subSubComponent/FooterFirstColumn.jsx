import React from 'react'
import src from '../assets/svg/footer/whiteLogo.svg';
import { footerSocial } from '../assets';
const FooterFirstColumn = () => {
  return (
    <div className="flex md:w-3/5 lg:w-2/5 flex-col justify-center items-center lg:items-start gap-y-4 md:gap-y-6 lg:gap-y-4">
      <img src={src} alt="logo" />
      <p className="text-white  font-tajawal font-normal text-center lg:text-start text-sm md:text-lg ">
        تقدم لكم شركة برنس تصاميم معمارية مميزة وديكورات داخلية فريدة بالإضافة
        للاشراف الهندسي الفعال على جميع انواع المباني بخبرة تتجاوز 25 عام ...
      </p>
      <div className=" flex justify-center items-center lg:justify-start gap-x-8 md:gap-x-4 lg:gap-x-2">
        {footerSocial.map((link) => {
          return (
            <a key={link.id} href={link.href} target="_blank">
              <img src={link.img} alt="social" />
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default FooterFirstColumn