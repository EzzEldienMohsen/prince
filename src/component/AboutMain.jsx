import React from 'react'
import { AboutMainImage, AboutMainInfo } from '../subComponent';

const AboutMain = ({textKey}) => {
  return (
    <div className="w-full px-8 lg:px-16 my-32 flex flex-col justify-center items-center lg:flex-row lg:justify-between">
      <AboutMainImage />
      <AboutMainInfo textKey={textKey}/>
    </div>
  );
}

export default AboutMain