import React from 'react';
import { useGlobalData } from '../context/GlobalDataContext';
import { ImageWithFallBack, ProjectsCardDesign, TheModalBody } from '../subSubComponent';

const MainProjectsCard = ({ cardData }) => {
  const { data, isLoading } = useGlobalData();
  const theData = cardData || data?.projects?.projects || [];

  if (isLoading) {
    return (
      <div className="w-full aspect-square flex justify-center items-center">
        <span className="loading loading-spinner text-theRed loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="flex flex-col mt-4 md:mt-0 justify-center items-center w-full lg:w-4/5 bg-white gap-y-8 md:gap-y-4 md:grid md:grid-cols-2 md:justify-evenly lg:grid-cols-3 md:gap-x-10 ">
      {theData.map((link, index) => {
        const slideId = `slide${index + 1}`;
        const nextSlideId = `slide${((index + 1) % theData.length) + 1}`;
        const prevSlideId = `slide${
          ((index - 1 + theData.length) % theData.length) + 1
        }`;

        return (
          <React.Fragment key={link.id}>
            <button
              onClick={() => document.getElementById(link.id).showModal()}
            >
             <ProjectsCardDesign link={link}/>
            </button>
            <TheModalBody
              theData={theData}
              link={link}
              slideId={slideId}
              prevSlideId={prevSlideId}
              nextSlideId={nextSlideId}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default MainProjectsCard;
