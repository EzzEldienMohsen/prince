import React from 'react'
import { privacyBreadCrumbs } from '../assets';
import { PrivacyContent, TitleComponent } from '../component';
import { privacyLorem } from '../assets';

const PrivacyPolicy = () => {
  return (
    <div className="w-full flex justify-center flex-col items-center gap-y-20">
      <TitleComponent title="privacy" arrows={privacyBreadCrumbs} />
      <PrivacyContent content={privacyLorem}/>
    </div>
  );
}

export default PrivacyPolicy