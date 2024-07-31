import React from 'react';
import {
  ImageWithFallBack,
  ProjectsCardDesign,
  TheModalBody,
} from '../subSubComponent';
const ProjectsCards = ({ theData }) => {
  return (
    <div className="flex flex-col px-8 lg:px-16 mt-4 md:mt-0 justify-center items-center w-full lg:w-4/5 bg-white gap-y-8 md:gap-y-4 md:grid md:grid-cols-2 md:justify-evenly lg:grid-cols-3 md:gap-x-10 ">
      {theData.map((link, index) => {
        const slideId = `slide${index + 1}`;
        const nextSlideId = `slide${((index + 1) % theData.length) + 1}`;
        const prevSlideId = `slide${
          ((index - 1 + theData.length) % theData.length) + 1
        }`;

        return (
          <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              onClick={() => document.getElementById(link.id).showModal()}
            >
              <ProjectsCardDesign link={link} />
            </button>
            <TheModalBody
              theData={theData}
              link={link}
              slideId={slideId}
              prevSlideId={prevSlideId}
              nextSlideId={nextSlideId}
            />
          </>
        );
      })}
    </div>
  );
};

export default ProjectsCards;
