import { nanoid } from 'nanoid';
import React from 'react'
import location from '../assets/svg/footer/contact/location.svg';
import mail from '../assets/svg/footer/contact/mail.svg';
import mobile from '../assets/svg/footer/contact/mobile.svg';
import { useTranslation } from 'react-i18next';


const ContactFooter = ({data}) => {
  const {t} = useTranslation()
 const contactFooter = [
   { id: nanoid(), img: location, text: data.address },
   { id: nanoid(), img: mobile, text: data.phone },
   { id: nanoid(), img: mail, text: data.email },
 ];
  return (
    <div className=" flex flex-col justify-center items-center gap-y-4 w-full  lg:w-1/3 lg:items-start  mt-6 lg:mt-0">
      <h1 className="text-theLGray font-tajawal font-bold text-xl">{t("fourthColumnTitle")}</h1>
      <div className="flex flex-col text-theLGray md:w-4/5 justify-center md:gap-x-10  lg:gap-x-0 items-start md:flex-row md:justify-center md:items-center gap-y-2 lg:flex-col lg:justify-center lg:items-start">
        {contactFooter.map((link) => {
          return (
            <div
              key={link.id}
              className=" flex justify-start items-center gap-x-4"
            >
              <img src={link.img} alt="icon" />
              <p className="text-sm ">{link.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ContactFooter