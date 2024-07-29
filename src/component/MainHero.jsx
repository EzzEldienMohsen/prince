import React from 'react'
import { MainHeroInfo, Video } from '../subComponent';

const MainHero = () => {
  return (
    <div className="flex flex-col  px-8 lg:px-16 justify-center w-full bg-white items-center py-14 lg:flex-row-reverse lg:justify-between md:gap-x-4">
      <Video />
      <MainHeroInfo />
    </div>
  );
}

export default MainHero