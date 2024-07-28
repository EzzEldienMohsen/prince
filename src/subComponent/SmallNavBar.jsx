import React from 'react';
import src from '../assets/svg/header/menuButton.svg';
import { pages } from '../assets';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const SmallNavBar = () => {
  let chosenPage;
  try {
    chosenPage = JSON.parse(localStorage.getItem('navPage')) || pages[0].id;
  } catch (error) {
    chosenPage = pages[0].id;
  }
  const [selectedButton, setSelectedButton] = React.useState(chosenPage);
  const { t } = useTranslation();

  return (
    <div className="dropdown dropdown-end lg:hidden">
      <div tabIndex={0} role="button" className="m-1">
        <img src={src} alt="menu" />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-[85vw] p-2 shadow"
      >
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
    </div>
  );
};

export default SmallNavBar;
