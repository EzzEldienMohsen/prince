import React from 'react'
import { AboutMainImage, AboutMainInfo } from '../subComponent';

const AboutMain = () => {
  return (
    <div className="w-full px-8 lg:px-16 my-32 flex flex-col justify-center items-center lg:flex-row lg:justify-between">
      <AboutMainImage />
      <AboutMainInfo/>
    </div>
  );
}

export default AboutMain