import React from 'react';
import src from '../assets/svg/header/menuButton.svg';
import { pages } from '../assets';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const SmallNavBar = () => {
  const [selectedButton, setSelectedButton] = React.useState(pages[0].id);
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
              onClick={() => setSelectedButton(page.id)}
              className={`${
                page.id === selectedButton
                  ? 'text-theRed underline decoration-[theRed]'
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
