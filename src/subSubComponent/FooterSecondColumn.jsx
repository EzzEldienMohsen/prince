import React from 'react'
import { Link } from 'react-router-dom';

const FooterSecondColumn = ({title,links}) => {
  return (
    <div className="hidden lg:flex flex-col justify-center items-start gap-y-4">
      <h1 className="text-theLGray font-tajawal font-bold text-xl">{title}</h1>
      <div className="flex flex-col justify-center items-start gap-y-2">
        {links.map((link) => {
          return (
            <Link
              to={link?.to?link.to : "/"}
              key={link?.id}
              className="text-theLGray font-tajawal"
            >
              {link?.text? link?.text : link?.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default FooterSecondColumn