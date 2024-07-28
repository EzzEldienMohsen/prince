import React from 'react';
import { pages } from '../assets';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const BigNavBar = () => {
  let chosenPage;
  try {
    chosenPage = JSON.parse(localStorage.getItem('navPage')) || pages[0].id;
  } catch (error) {
    chosenPage = pages[0].id;
  }
  const [selectedButton, setSelectedButton] = React.useState(chosenPage);
  const { t } = useTranslation();
  return (
    <ul className="hidden lg:flex justify-between items-center gap-x-6 font-tajawal text-xl font-normal">
      {pages.map((page) => {
        return (
          <motion.li
            key={page.id}
            onClick={() => {
              localStorage.setItem('navPage', JSON.stringify(page.id));
              setSelectedButton(page.id);
            }}
            className={`${
              page.id === selectedButton
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
