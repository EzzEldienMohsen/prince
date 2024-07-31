import React from 'react'
import { useTranslation } from 'react-i18next';

const PrivacyContent = ({content}) => {
  const {t} = useTranslation()
  return <ul className="w-full -mt-10  px-10 lg:px-20 pb-8">
  {content.map((li)=>{
    return <li key={li.id} className='font-tajawal px-3 py-6 text-md md:text-lg lg:text-xl  list-disc text-start text-theFontColor'>
      {t(li.text)}
    </li>
  })}
  </ul>;
}

export default PrivacyContent