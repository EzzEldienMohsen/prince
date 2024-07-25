import React from 'react';
import { FormCard, MainHero } from '../component';

const Landing = () => {
  return (
    <div className="w-full px-8 lg:px-16 flex flex-col justify-center items-center">
      <MainHero />
      <FormCard/>
    </div>
  );
};

export default Landing;
