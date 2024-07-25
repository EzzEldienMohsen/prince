import React from 'react'
import { MainHeroInfo, Video } from '../subComponent';

const MainHero = () => {
  return (
    <div className="flex flex-col justify-center w-full bg-white items-center py-14 px-8 lg:px-16 lg:flex-row-reverse lg:justify-between lg:gap-x-4">
      <Video />
     <MainHeroInfo/>
    </div>
  );
}

export default MainHero