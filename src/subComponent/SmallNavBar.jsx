import React from 'react';
import { pages } from '../assets';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useGlobalContext } from '../context/GlobalContext';
import arrow from "../assets/svg/header/arrow.svg"
import src from "../assets/svg/header/whatsApp.svg"

const SmallNavBar = ({ data }) => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
    const {toggleLang} = useGlobalContext()

  return (
    <ul className="menu  min-h-full font-tajawal w-60 md:w-80 p-4 bg-theLGray">
      <div className="flex justify-center items-center py-14 md:py-4">
        <img src={data.logo} alt="logo" className="w-1/2" />
      </div>
      <ul className="list-none gap-y-2">
        {pages.map((page) => {
          const isSelected = page.to === pathname;
          return (
            <motion.li
              key={page.id}
              className={`py-2 border-b-[1px] ${
                isSelected
                  ? 'text-theRed  decoration-[theRed]'
                  : 'text-theFontColor'
              }`}
            >
              <Link to={page.to}>{t(page.key)}</Link>
            </motion.li>
          );
        })}
        <li
          onClick={toggleLang}
          className="py-2 border-b-[1px] text-theFontColor flex flex-row justify-between "
        >
          <a className="w-1/5">{t('lang')}</a>
          <img src={arrow} alt="arrow" className=" " />
        </li>
      </ul>
      <div className="mt-4 flex w-full flex-row justify-center items-center gap-x-4">
        <a href={`https://wa.me/${data.whatsapp_1}`} target="_blank">
          <img src={src} alt="whatsApp" />
        </a>
        <a href={`https://wa.me/${data.whatsapp_2}`} target="_blank">
          <img src={src} alt="whatsApp" />
        </a>
      </div>
    </ul>
  );
};

export default SmallNavBar;
