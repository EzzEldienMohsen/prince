import React from 'react';
import { pages } from '../assets';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const BigNavBar = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  return (
    <ul className="hidden lg:flex justify-between items-center gap-x-6 font-tajawal text-xl font-normal">
      {pages.map((page) => {
        const isSelected = page.to === pathname;
        return (
          <motion.li
            key={page.id}
            className={`${
              isSelected
                ? 'text-theRed underline underline-offset-[16px] decoration-[theRed]'
                : ''
            }`}
          >
            <Link to={page.to}>{t(page.key)}</Link>
          </motion.li>
        );
      })}
    </ul>
  );
};

export default BigNavBar;
