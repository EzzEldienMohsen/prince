import React from 'react'
import { SingleNewsContent, TitleComponent } from '../component';
import { useLoaderData } from 'react-router-dom';
import { autoFetch } from '../utils';
import { singleNewsBreadCrumbs } from '../assets';


const singleNewsQuery = (language, id) => {
  return {
    queryKey: ['projects', language, id],
    queryFn: () =>
      autoFetch(`/news/${id}`, {
        headers: {
          locale: language,
          Accept: 'application/json',
        },
      }),
  };
};

export const loader =
  (queryClient, language) =>
  async ({ params }) => {
    const { id } = params 

    const data = await queryClient.ensureQueryData(
      singleNewsQuery(language, id, )
    );
    return data;
  };

const SingleNewsPage = () => {
        const { data } = useLoaderData();
  return (
    <div className="w-full flex justify-center flex-col items-center gap-y-20">
      <TitleComponent title="SingleNewsTitle" arrows={singleNewsBreadCrumbs} />
      <SingleNewsContent data={data.data} />
    </div>
  );
}

export default SingleNewsPage