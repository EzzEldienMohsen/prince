import React from 'react';
import { AboutMain, FirstMainCard, FormCard, MainHero } from '../component';

const Landing = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <MainHero />
      <FormCard/>
      <FirstMainCard/>
      <AboutMain/>
    </div>
  );
};

export default Landing;
