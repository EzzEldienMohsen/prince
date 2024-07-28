import React from 'react'
import { TitleComponent } from '../component';
import { projectsBreadCrumbs } from '../assets';
import { useLoaderData } from 'react-router-dom';
import { autoFetch } from '../utils';
import { Pagination, ProjectsCards, ProjectsNavBar } from '../subComponent';

const ProjectsQuery = (language, page) => {
  return {
    queryKey: ['projects', language, page],
    queryFn: () =>
      autoFetch(`projects?page=${page}`, {
        headers: {
          locale: language,
          Accept: 'application/json',
        },
      }),
  };
};

export const loader =
  (queryClient, language) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get('page') || 1; // Default to page 1 if not specified

    const data = await queryClient.ensureQueryData(
      ProjectsQuery(language, page)
    );
    return data;
  };



const ProjectsPage = () => {
    const {data} = useLoaderData()
      console.log(data);

  return (
    <div className="w-full flex justify-center flex-col items-center gap-y-20">
      <TitleComponent title="projectsPageTitle" arrows={projectsBreadCrumbs} />
      <ProjectsNavBar data={data.data}  />
      <ProjectsCards theData={data.projects} />
      <Pagination />
    </div>
  );
}

export default ProjectsPage