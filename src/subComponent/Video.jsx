import React, { useState } from 'react';
import play from '../assets/svg/video/play.svg';
import { useGlobalData } from '../context/GlobalDataContext';
import { useGlobalContext } from '../context/GlobalContext';

const Video = () => {
  const { data } = useGlobalData();
  const { isArabic } = useGlobalContext();
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayButtonClick = () => {
    setIsPlaying(true);
    // Additional logic can be added here if you have access to control the iframe playback
  };

  return (
    <div className="relative flex justify-center items-center w-[323px] md:w-[650px] lg:w-[900px] h-[237.4px] md:h-[476.87px] lg:h-[580px] p-3 md:p-6 lg:p-8">
      <div
        className={`absolute top-0 ${
          isArabic ? 'left-0' : 'right-0'
        } w-4/5 bg-theRed h-full -z-1`}
      ></div>

      <div className="z-10 h-full w-full">
        <iframe
          width="100%"
          height="100%"
          src={data?.homeAbout?.hero_video}
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full object-cover"
        ></iframe>
      </div>

      {!isPlaying && (
        <div className="absolute inset-0 flex justify-center items-center z-10">
          <button
            className="bg-theDGray rounded-full shadow-md"
            onClick={handlePlayButtonClick}
          >
            <img src={play} alt="Play" className="w-24 h-24" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Video;
