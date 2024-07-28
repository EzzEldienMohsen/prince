import React from 'react'
import { AboutInfoContent, AboutInfoImage } from '../subComponent';

const AboutInfoSection = ({data}) => {
  return (
    <div className='w-full px-8 lg:px-16 my-8 flex flex-col justify-center items-center gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between lg:gap-x-6'>
    <AboutInfoImage/>
    <AboutInfoContent data={data} />
    </div>
  )
}

export default AboutInfoSection