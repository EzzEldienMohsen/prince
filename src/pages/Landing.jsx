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
import { useGlobalData } from '../context/GlobalDataContext';

const Landing = () => {
  const {data} = useGlobalData()
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <MainHero />
      <FormCard />
      <FirstMainCard />
      <AboutMain textKey="aboutSectionText" isTrue={true} data={data?.homeAbout} />
      <SecondMainCard  />
      <CarouselSection />
      <TheImageSection />
      <ProjectsSection />
      <FAQSection />
    </div>
  );
};

export default Landing;
