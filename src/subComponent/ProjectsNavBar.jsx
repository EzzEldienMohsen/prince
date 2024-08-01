import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ProjectsNavBar = ({ data }) => {
  const { t } = useTranslation();
  const location = useLocation();

  // Determine initial state based on the current path
  const initialSelectedButton =
    data?.categories?.find(
      (category) => `/projects/category/${category.id}` === location.pathname
    )?.id || 0;

  const [selectedButton, setSelectedButton] = React.useState(
    initialSelectedButton
  );

  useEffect(() => {
    // Set data for the initially selected button
    if (initialSelectedButton === 0) {
    } else {
      const newData = data?.projects?.filter(
        (unit) => unit?.category?.id === initialSelectedButton
      );
    }
  }, [initialSelectedButton, data]);

  return (
    <ul className="flex justify-between items-center gap-x-6 font-tajawal text-sm md:text-lg lg:text-xl font-normal">
      <motion.li
        onClick={() => {
          setSelectedButton(0);
        }}
        className={`${
          selectedButton === 0
            ? 'text-theRed underline underline-offset-[16px] decoration-[theRed]'
            : ''
        }`}
      >
        <Link to={`/projects`}>{t('allProjects')}</Link>
      </motion.li>

      {data?.categories?.map((page) => (
        <motion.li
          key={page.id}
          onClick={() => {
            setSelectedButton(page.id);
            const newData = data?.projects?.filter(
              (unit) => unit?.category?.id === page.id
            );
          }}
          className={`${
            page.id === selectedButton
              ? 'text-theRed underline underline-offset-8 decoration-[theRed]'
              : ''
          }`}
        >
          <Link to={`/projects/category/${page.id}`}>{page.name}</Link>
        </motion.li>
      ))}
    </ul>
  );
};

export default ProjectsNavBar;
