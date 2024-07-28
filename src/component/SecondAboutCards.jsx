import React from 'react'
import { SeconSectionCardDesign } from '../subComponent';
import { theVision} from './../assets/index';

const SecondAboutCards = () => {
  return (
    <div className="w-full bg-theLGray  my-8">
      <div className='flex flex-col justify-center items-center px-8 lg:px-16 py-8'><SeconSectionCardDesign card={theVision} /></div>
    </div>
  );
}

export default SecondAboutCards