import React from 'react'
import { MainProjectsCard,  ProjectsNavBar } from '../subComponent';
import { useTranslation } from 'react-i18next';
import { useGlobalData } from '../context/GlobalDataContext';

const ProjectsSection = () => {
  const { data, isLoading } = useGlobalData();
  const {t} = useTranslation()
  const [theData, setTheData] = React.useState(data?.projects?.projects || []);
  React.useEffect(() => {
    if (data?.projects?.projects) {
      setTheData(data.projects.projects);
    }
  }, [data]);
    if (isLoading) {
      return (
        <div className="w-full aspect-square flex justify-center items-center">
          <span className="loading loading-spinner text-theRed loading-xl"></span>
        </div>
      );
    }
    return (
      <div className="w-full flex flex-col justify-center items-center px-8 lg:px-16 my-16 gap-y-6 md:gap-y-8 lg:gap-y-12 text-center">
        <p className="font-tajawal font-normal text-theRed text-lg md:text-2xl">
          {t('mainProjects')}
        </p>
        <h1 className="font-semiBold font-tajawal text-theFontColor text-xl md:text-3xl">
          {t('mainProjectsTitle')}
        </h1>
        <ProjectsNavBar
          data={data?.projects}
          setTheData={setTheData}
          theTrue={true}
        />
        <MainProjectsCard cardData={theData} />
      </div>
    );
}

export default ProjectsSection