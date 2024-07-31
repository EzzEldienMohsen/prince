import React from 'react'
import { PrivacyContent, TitleComponent } from '../component';
import { ownerShipBreadCrumbs, privacyLorem } from '../assets';

const OwnerShip = () => {
  return (
    <div className="w-full flex justify-center flex-col items-center gap-y-20">
      <TitleComponent title="ownerShip" arrows={ownerShipBreadCrumbs} />
      <PrivacyContent content={privacyLorem} />
    </div>
  );
}

export default OwnerShip