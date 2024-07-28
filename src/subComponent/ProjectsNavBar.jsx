import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ProjectsNavBar = ({ data}) => {
  const [selectedButton, setSelectedButton] = React.useState(0);

  const { t } = useTranslation();

    return (
      <ul className="flex justify-between items-center gap-x-6 font-tajawal text-sm md:text-lg lg:text-xl font-normal">
        <motion.li
          onClick={() => {
            setSelectedButton(0);
            const newData = data?.projects;
            setTheData(newData);
          }}
          className={`${
            0 === selectedButton
              ? 'text-theRed underline underline-offset-[16px] decoration-[theRed]'
              : ''
          }`}
        >
          <Link to={`/projects`}>{t('allProjects')}</Link>
        </motion.li>

        {data?.categories?.map((page) => {
          return (
            <motion.li
              key={page.id}
              onClick={() => {
                setSelectedButton(page.id);
                setCategoryId(page.id);
              }}
              className={`${
                page.id === selectedButton
                  ? 'text-theRed underline underline-offset-8 decoration-[theRed]'
                  : ''
              }`}
            >
              <Link to={`/projects/category/${page.id}`}>{page.name}</Link>
            </motion.li>
          );
        })}
      </ul>
    );
  }


export default ProjectsNavBar;
