import React from 'react';
import { AboutMain, FirstMainCard, FormCard, MainHero, SecondMainCard } from '../component';

const Landing = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <MainHero />
      <FormCard/>
      <FirstMainCard/>
      <AboutMain/>
      <SecondMainCard/>
    </div>
  );
};

export default Landing;
