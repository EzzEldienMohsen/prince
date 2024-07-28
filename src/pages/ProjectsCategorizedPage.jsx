import React from 'react';
import { TitleComponent } from '../component';
import { projectsBreadCrumbs } from '../assets';
import { useLoaderData } from 'react-router-dom';
import { autoFetch } from '../utils';
import { Pagination, ProjectsCards, ProjectsNavBar } from '../subComponent';

const projectCatQuery = (language, page, cat) => {
  return {
    queryKey: ['projects', language, page, cat],
    queryFn: () =>
      autoFetch(`/projects/category/${cat}?page=${page}`, {
        headers: {
          locale: language,
          Accept: 'application/json',
        },
      }),
  };
};

export const loader =
  (queryClient, language) =>
  async ({ request ,params}) => {
    const url = new URL(request.url);
    const page = url.searchParams.get('page') || 1; // Default to page 1 if not specified
    const {cat} = params || ''; // 'cat' as the query parameter for category

    const data = await queryClient.ensureQueryData(
      projectCatQuery(language, page, cat)
    );
    return data;
  };

const ProjectsCategorizedPage = () => {
    const{data} =useLoaderData()
    console.log(data)
  return (
    <div className="w-full flex justify-center flex-col items-center gap-y-20">
      <TitleComponent title="projectsPageTitle" arrows={projectsBreadCrumbs} />
      <ProjectsNavBar data={data.data} />
      <ProjectsCards theData={data.data.projects} />
      <Pagination />
    </div>
  );
};

export default ProjectsCategorizedPage;
