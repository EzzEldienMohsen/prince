import React from 'react'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const FooterSecondColumn = ({title,links}) => {
    const { t } = useTranslation();

  return (
    <div className="hidden lg:flex flex-col justify-center items-start gap-y-4">
      <h1 className="text-theLGray font-tajawal font-normal text-xl">
        {t(title)}
      </h1>
      <div className="flex flex-col justify-center items-start gap-y-2">
        {links?.map((link) => {
          return (
            <Link
              to={link?.to ? link.to : '/'}
              key={link?.id}
              className="text-theLGray font-tajawal"
            >
              {link?.key ? t(link?.key) : link?.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default FooterSecondColumn