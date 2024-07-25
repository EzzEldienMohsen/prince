import React from 'react';
import { FirstFooterDiv, SecondFooterDiv, ThirdFooterDiv } from '../subComponent';

const Footer = () => {
  return (
    <div className="w-full flex flex-col mt-6">
      <FirstFooterDiv />
      <div className="w-full pt-16 pb-8 bg-theDGray flex justify-center items-center">
        <SecondFooterDiv />
      </div>
     <ThirdFooterDiv/>
    </div>
  );
};

export default Footer;
