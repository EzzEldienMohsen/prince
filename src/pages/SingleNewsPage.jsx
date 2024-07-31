import React from 'react'
import { SingleNewsContent, TitleComponent } from '../component';
import { useLoaderData } from 'react-router-dom';
import { autoFetch } from '../utils';
import { nanoid } from 'nanoid';
import breadCrumpImg from '../assets/svg/secondaryPages/titleVector.svg';


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
       const singleNewsBreadCrumbs = [
         { id: nanoid(), img: breadCrumpImg, key: 'main', to: '/' },
         {
           id: nanoid(),
           img: breadCrumpImg,
           key: 'mainLatestBigTitle',
           to: '/news',
         },
         {
           id: nanoid(),
           img: '',
           key: data.data.title,
           to: `/news/${data.data.id}`,
         },
       ];
  return (
    <div className="w-full flex justify-center flex-col items-center gap-y-20">
      <TitleComponent title="SingleNewsTitle" arrows={singleNewsBreadCrumbs}  />
      <SingleNewsContent data={data.data} />
    </div>
  );
}

export default SingleNewsPage