import React from 'react'
import { ProjectsCards, ProjectsNavBar } from '../subComponent';

const ProjectsSection = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-8 lg:px-16 my-16 gap-y-6 md:gap-y-8 lg:gap-y-12 text-center">
      <p className="font-tajawal font-light text-theRed text-lg md:text-2xl">
        مشاريعنا
      </p>
      <h1 className="font-bold font-tajawal text-black text-xl md:text-3xl">
        مشاريع شركة برنس للاستشارات الهندسية
      </h1>
      <ProjectsNavBar />
      <ProjectsCards/>
    </div>
  );
}

export default ProjectsSection