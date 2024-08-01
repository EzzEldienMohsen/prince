import React from 'react'
import { privacyBreadCrumbs } from '../assets';
import { PrivacyContent, TitleComponent } from '../component';
import { privacyLorem } from '../assets';
import { autoFetch } from '../utils';
import { useLoaderData } from 'react-router-dom';

const privacyQuery = (language) => {
  return {
    queryKey: ['privacy', language],
    queryFn: () =>
      autoFetch(
        `/privacy-policy
`,
        {
          headers: {
            locale: language,
            Accept: 'application/json',
          },
        }
      ),
  };
};

export const loader = (queryClient, language) => async () => {
  const data = await queryClient.ensureQueryData(privacyQuery(language));
  return data;
};


const PrivacyPolicy = () => {
    const {data} = useLoaderData()
  return (
    <div className="w-full flex justify-center flex-col items-center gap-y-20">
      <TitleComponent title="privacy" arrows={privacyBreadCrumbs} />
      <PrivacyContent content={data.data}/>
    </div>
  );
}

export default PrivacyPolicy