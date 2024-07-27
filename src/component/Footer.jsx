import React from 'react';
import { FirstFooterDiv, SecondFooterDiv, ThirdFooterDiv } from '../subComponent';

const Footer = ({data}) => {
  return (
    <div className="w-full flex flex-col mt-6">
      <FirstFooterDiv data={data}/>
      <div className="w-full pt-16 pb-8 bg-theDGray flex justify-center items-center">
        <SecondFooterDiv data={data} />
      </div>
     <ThirdFooterDiv data={data}/>
    </div>
  );
};

export default Footer;
