import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import { Footer, Header } from '../component';
import { autoFetch } from '../utils';


const layoutQuery = (language) => {
  return {
    queryKey: ['layout', language],
    queryFn: () =>
      autoFetch(`/layout`, {
        headers: {
          locale: language,
          Accept: 'application/json',
        },
      }),
  };
};

export const loader = (queryClient, language) => async () => {
  const data = await queryClient.ensureQueryData(layoutQuery(language));
  return data;
};



const Home = () => {
  const { data } = useLoaderData();
  


  return (
    <div className="flex flex-col justify-center items-center">
      <Header data={data.data} />
      <Outlet />
      <Footer data={data.data} />
    </div>
  );
};

export default Home;
