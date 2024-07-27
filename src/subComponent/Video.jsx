import React from 'react';
import play from '../assets/svg/video/play.svg';
import { useGlobalData } from '../context/GlobalDataContext';

const Video = () => {
  const { data } = useGlobalData();



 
  const youtubeVideoId = data?.home_about?.hero_video.split('v=')[1];
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}`;

  return (
    <div className="relative flex justify-center items-center w-4/5 bg-theRed max-w-xl lg:w-2/5 aspect-square p-4">
      <div className="relative w-full h-full">
        <div className="absolute top-0 left-0 right-[-20%] bottom-0">
          <iframe
            width="100%"
            height="100%"
            src={youtubeEmbedUrl}
            title="YouTube video player"
           
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full object-cover"
          ></iframe>
        </div>
        <div className="absolute inset-0 flex justify-center items-center">
          <button className="bg-theDGray rounded-full shadow-md">
            <img src={play} alt="Play" className="w-12 h-12" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Video;
