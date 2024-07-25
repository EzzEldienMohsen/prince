import React from 'react';
import {
  AboutMain,
  CarouselSection,
  FAQSection,
  FirstMainCard,
  FormCard,
  MainHero,
  ProjectsSection,
  SecondMainCard,
  TheImageSection,
} from '../component';

const Landing = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <MainHero />
      <FormCard />
      <FirstMainCard />
      <AboutMain />
      <SecondMainCard />
      <CarouselSection />
      <TheImageSection />
      <ProjectsSection />
      <FAQSection />
    </div>
  );
};

export default Landing;
