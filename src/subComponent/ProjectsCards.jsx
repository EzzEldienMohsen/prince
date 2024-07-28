import React from 'react';

const ProjectsCards = ({ theData }) => {
  console.log(theData)
  return (
    <div className="flex flex-col mt-4 md:mt-0 justify-center items-center w-full lg:w-4/5 bg-white gap-y-8 md:gap-y-4 md:grid md:grid-cols-2 md:justify-evenly lg:grid-cols-3 md:gap-x-10 ">
      {theData.map((link) => {
        console.log({...link});
        return (
          <div
            key={link.id}
            className=" w-full  flex flex-col bg-theLGray justify-center  items-start gap-y-3 "
          >
            <img src={link.image} alt="proj" className="w-full" />
            <h1 className="font-tajawal font-normal text-lg text-black px-3">
              {link.title}
            </h1>
            <p className="text-[#7C8893] font-tajawal   font-normal md:text-md px-3 text-start">
              {link.description}
            </p>
            {/* The Final Div */}

            <div className="py-2 mx-2 px-2  flex flex-col justify-start items-start w-full">
              <div className="w-11/12 py-[1px] bg-[#E3E3E3] justify-self-center mr-2"></div>
              {/* the date section */}
              <div className="flex justify-between items-center gap-x-1">
                <p className="text-[#7C8893] font-tajawal font-normal md:text-xs px-2 mt-2">
                  {link.category.name}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsCards;
