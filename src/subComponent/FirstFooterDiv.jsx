import React from 'react'
import { Link } from 'react-router-dom';
import phone from '../assets/svg/footer/phone.svg';
import src from '../assets/svg/footer/whatsAppButton.svg';
const FirstFooterDiv = () => {
  return (
    <div className="bg-theRed px-8 lg:px-16 flex flex-col justify-center items-center lg:flex-row lg:justify-between py-6">
      <h1 className="text-xl text-white  md:text-2xl font-tajawal font-semiBold lg:w-1/2 text-center lg:text-start">
        مع برنس للاستشارات الهندسية حلمك يصبح حقيقة بفريق عمل متكامل من كافة
        التخصصات
      </h1>
      <div className="flex flex-col justify-center items-center md:flex-row-reverse md:justify-between md:gap-x-2 mt-4 lg:mt-0">
        <div className="flex justify-between items-center gap-x-2 mb-4 md:mb-0">
          <a href="" target="_blank">
            <img src={src} alt="whatsApp" />
          </a>
          <a href="" target="_blank">
            <img src={src} alt="whatsApp" />
          </a>
        </div>
        <Link
          to="/"
          className="bg-theDGray text-white font-tajawal px-6 py-4 flex justify-center items-center gap-x-2"
        >
          <p className="text-sx">اتصل بنا</p>
          <img src={phone} alt="phone" />
        </Link>
      </div>
    </div>
  );
}

export default FirstFooterDiv