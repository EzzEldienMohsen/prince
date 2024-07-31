import React from 'react'
import ImageWithFallback from './ImageWithFallBack';
import drawing from "../assets/svg/projectCard/shopDrawing.svg"
import location from "../assets/svg/projectCard/location.svg"
const ProjectsCardDesign = ({link}) => {
  console.log(link)
  return (
    <div className="w-full flex flex-col h-[387px] bg-theLGray justify-items-stretch items-start gap-y-3">
      <ImageWithFallback
        src={link.images[0]}
        alt={link.title}
        className="w-full h-[214px] aspect-auto"
      />
      <h1 className="font-tajawal font-normal text-lg text-theFontColor px-3">
        {link.title}
      </h1>
      <div className="flex justify-start items-center  px-3 gap-x-3">
        <img src={drawing} alt="location" />
        {link.space ? (
          <p className="text-[#7C8893] font-tajawal font-normal md:text-md text-start">
            {link.space}
          </p>
        ) : (
          <p className="text-[#7C8893] font-tajawal font-normal md:text-md text-start">
            {link.description ||
              'lorem until we recieve the data to give some shape for the card'}
          </p>
        )}
      </div>
      <div className="flex justify-start  px-3 items-center gap-x-3 mb-3">
        <img src={location} alt="location" />
        {link.area ? (
          <p className="text-[#7C8893] font-tajawal font-normal md:text-md">
            {link.area}
          </p>
        ) : (
          <p className="text-[#7C8893] font-tajawal font-normal md:text-md">
            {link.category.name}
          </p>
        )}
      </div>
    </div>
  );
}

export default ProjectsCardDesign