import React from 'react';
import { FirstMainCard, FormCard, MainHero } from '../component';

const Landing = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <MainHero />
      <FormCard/>
      <FirstMainCard/>
    </div>
  );
};

export default Landing;
