import React from 'react'
import {
  FooterSecondColumn,
  FooterFirstColumn,
  ContactFooter,
} from '../subSubComponent';
import { footerLinks } from '../assets';
const SecondFooterDiv = ({data}) => {

  return (
    <div className="w-full   px-4 lg:px-0 flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:items-start lg:gap-x-10 ">
      <FooterFirstColumn data={data} />
      <FooterSecondColumn
        links={data?.projects_categories}
        title="residential"
      />
      <FooterSecondColumn links={footerLinks} title="hyperLinks" />
      <ContactFooter data={data} />
    </div>
  );
}

export default SecondFooterDiv