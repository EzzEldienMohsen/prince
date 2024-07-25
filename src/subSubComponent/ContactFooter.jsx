import React from 'react'
import { contactFooter } from '../assets';

const ContactFooter = () => {
  return (
    <div className=" flex flex-col justify-center items-center gap-y-4 w-full lg:w-auto lg:items-start  mt-6 lg:mt-0">
      <h1 className="text-theLGray font-tajawal font-bold text-xl">التواصل</h1>
      <div className="flex flex-col text-theLGray  justify-center md:gap-x-10 lg:gap-x-0 items-start md:flex-row md:justify-between md:items-center gap-y-2 lg:flex-col lg:justify-center lg:items-start">
        {contactFooter.map((link) => {
          return (
            <div
              key={link.id}
              className=" flex justify-between items-center gap-x-3"
            >
              <img src={link.img} alt="icon" />
              <p>{link.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ContactFooter