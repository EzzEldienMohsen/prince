import React from 'react';
import twitter from '../assets/svg/footer/social/twitter.svg';
import linkedin from '../assets/svg/footer/social/linkedin.svg';
import instagram from '../assets/svg/footer/social/instagram.svg';
import facebook from '../assets/svg/footer/social/facebook.svg';
import { nanoid } from 'nanoid';

const FooterFirstColumn = ({ data }) => {
  const footerSocial = [
    { id: nanoid(), href: data.socials.twitter, img: twitter },
    { id: nanoid(), href: data.socials.linkedin, img: linkedin },
    { id: nanoid(), href: data.socials.instagram, img: instagram },
    {id: nanoid(),href: data.socials.facebook,img: facebook,},
  ];
  return (
    <div className="flex md:w-3/5 lg:w-1/5 flex-col justify-center items-center lg:items-start gap-y-4 md:gap-y-6 lg:gap-y-4 lg:gap-x-10">
      <img src={data.white_logo} alt="logo" />
      <p className="text-white  font-tajawal font-normal text-center lg:text-start text-sm md:text-lg lg:text-sm">
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
};

export default FooterFirstColumn;
