import React from 'react'
import {
  FooterSecondColumn,
  FooterFirstColumn,
  ContactFooter,
} from '../subSubComponent';
import { footerLinks, projects } from '../assets';
import { Link } from 'react-router-dom';
const SecondFooterDiv = () => {
  return (
    <div className="w-full lg:w-4/5  px-4 lg:px-0 flex flex-col justify-center items-center lg:flex-row lf:justify-between lg:items-start lg:gap-x-8">
      <FooterFirstColumn />
      <FooterSecondColumn links={projects} title="المشاريع السكنية" />
      <FooterSecondColumn links={footerLinks} title="روابط سريعة" />
      <ContactFooter />
      
    </div>
  );
}

export default SecondFooterDiv