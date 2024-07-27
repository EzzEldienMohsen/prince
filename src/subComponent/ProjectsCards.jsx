import React from 'react'
import { useGlobalData } from '../context/GlobalDataContext';

const ProjectsCards = ({theData}) => {
const {data:cardData} = useGlobalData()
const data = theData || cardData?.projects?.projects
  
  return (
    <div className="flex flex-col justify-center items-center w-full lg:w-4/5 bg-theLGray gap-y-8 md:gap-y-4 md:flex-row md:flex-wrap md:justify-evenly lg:justify-between md:gap-x-4">
      {data?.map((link) => {
        return (
          <div
            key={link.id}
            className=" w-full md:w-2/5 lg:w-[27%] flex flex-col bg-white justify-center  items-start gap-y-3 "
          >
            <img src={link.image} alt="proj" className="w-full" />
            <h1 className="font-tajawal font-bold text-lg text-black px-3">
              {link.title}
            </h1>
            <p className="text-theDGray font-tajawal   font-light md:text-md px-3 text-start">
              {link.description}
            </p>
            {/* The Final Div */}
            <div className="py-2 mx-2 px-2 border-t-[2px] border-white flex justify-between items-center w-full">
              {/* the date section */}
              <div className="flex justify-between items-center gap-x-1">
                <p className="text-theDGray font-tajawal font-extraLight md:text-xs px-2">
                  {link.category.name}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectsCards