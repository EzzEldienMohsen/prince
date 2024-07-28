import React from 'react'
import { AboutInfoSection, AboutMain, FirstMainCard, SecondAboutCards, TitleComponent } from '../component';
import { useLoaderData } from 'react-router-dom';
import { autoFetch } from '../utils';
import { aboutBreadCrumbs } from '../assets';



const layoutQuery = (language) => {
  return {
    queryKey: ['about', language],
    queryFn: () =>
      autoFetch(`/about`, {
        headers: {
          locale: language,
          Accept: 'application/json',
        },
      }),
  };
};

export const loader = (queryClient, language) => async () => {
  const data = await queryClient.ensureQueryData(layoutQuery(language));
  return data;
};


const AboutPage = () => {
   const { data } = useLoaderData();
  return (
    <div className="flex flex-col justify-center items-center w-full ">
      <TitleComponent title="aboutPageTitle" arrows={aboutBreadCrumbs}/>
      <FirstMainCard />
      <AboutMain textKey="aboutAboutText" />
      <SecondAboutCards />
      <AboutInfoSection data={data.data} />
    </div>
  );
}

export default AboutPage