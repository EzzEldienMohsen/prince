import React from 'react';
import { TitleComponent } from '../component';
import { newsBreadCrumbs } from './../assets/index';
import { useLoaderData } from 'react-router-dom';
import { autoFetch } from '../utils';
import { NewsCard, Pagination } from '../subComponent';
const newsQuery = (language, page) => {
  return {
    queryKey: ['news', language, page],
    queryFn: () =>
      autoFetch(`news?page=${page}`, {
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
      newsQuery(language, page)
    );
    return data;
  };

const NewsPage = () => {
        const {data} = useLoaderData()
      console.log(data.data.data);
  return (
    <div className="w-full flex justify-center flex-col items-center gap-y-20">
      <TitleComponent title="mainLatestBigTitle" arrows={newsBreadCrumbs} />
      <NewsCard data={data.data.data} />
      <Pagination/>
    </div>
  );
};

export default NewsPage;
