import React from 'react';
import { pages } from '../assets';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BigNavBar = () => {
  const [selectedButton, setSelectedButton] = React.useState(pages[0].id);

  return (
    <ul className="hidden lg:flex justify-between items-center gap-x-6 font-tajawal text-xl font-light">
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
            <Link to={page.to}>{page.text}</Link>
          </motion.li>
        );
      })}
    </ul>
  );
};

export default BigNavBar;
