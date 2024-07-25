import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { nanoid } from 'nanoid';
const pages = [
  {
    id: nanoid(),
    text: 'كل المشاريع',
    to: '/',
  },
  {
    id: nanoid(),
    text: 'فلل سكنية',
    to: '/',
  },
  {
    id: nanoid(),
    text: 'مساجد',
    to: '/',
  },
  {
    id: nanoid(),
    text: 'مشاريع كبرى',
    to: '/',
  },
];
const ProjectsNavBar = () => {
      const [selectedButton, setSelectedButton] = React.useState(pages[0].id);

  return (
    <ul className="flex justify-between items-center gap-x-6 font-tajawal text-sm md:text-lg lg:text-xl font-light">
      {pages.map((page) => {
        return (
          <motion.li
            key={page.id}
            onClick={() => setSelectedButton(page.id)}
            className={`${
              page.id === selectedButton
                ? 'text-theRed underline underline-offset-8 decoration-[theRed]'
                : ''
            }`}
          >
            <Link to={page.to}>{page.text}</Link>
          </motion.li>
        );
      })}
    </ul>
  );
}

export default ProjectsNavBar