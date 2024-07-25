import React from 'react';
import { AboutMain, CarouselSection, FirstMainCard, FormCard, MainHero, SecondMainCard } from '../component';

const Landing = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <MainHero />
      <FormCard/>
      <FirstMainCard/>
      <AboutMain/>
      <SecondMainCard/>
      <CarouselSection/>
    </div>
  );
};

export default Landing;
