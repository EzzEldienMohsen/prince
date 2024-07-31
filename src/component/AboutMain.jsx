import React from 'react'
import { AboutMainImage, AboutMainInfo } from '../subComponent';

const AboutMain = ({textKey,isTrue,data}) => {
  return (
    <div className={`w-full px-8 lg:px-16 my-20 flex flex-col justify-center items-center ${isTrue?"lg:flex-row":"lg:flex-row-reverse"} lg:justify-between`}>
      <AboutMainImage data={data} />
      <AboutMainInfo textKey={textKey} isTrue={isTrue}/>
    </div>
  );
}

export default AboutMain