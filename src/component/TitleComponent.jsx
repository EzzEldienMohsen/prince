import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/GlobalContext';

const TitleComponent = ({ title, arrows }) => {
  console.log(arrows);
  const { isArabic } = useGlobalContext();
  const { t } = useTranslation();
  return (
    <div className="w-full flex justify-center my-8 px-8 lg:px-16 py-4 ">
      <div className="bg-theRed flex flex-col w-full justify-center items-center gap-y-3 py-4">
        <ul className="flex justify-center items-center gap-x-2 ">
          {arrows.map((link) => {
            return (
              <Link
                key={link.id}
                className="flex justify-between items-center gap-x-2"
              >
                <p
                  className={`${
                    link.img === '' ? 'text-white ' : 'text-theDGray'
                  } font-tajawal font-normal text-xs md:text-lg`}
                >
                  {t(link.key)}
                </p>
                {link.img === '' ? null : (
                  <img
                    src={link.img}
                    alt="alt"
                    className={`${isArabic ? '' : 'rotate-180'}`}
                  />
                )}
              </Link>
            );
          })}
        </ul>
        <h1 className="text-white text-center font-tajawal font-medium text-xl md:text-3xl">
          {t(title)}
        </h1>
      </div>
    </div>
  );
};

export default TitleComponent;
