import React from 'react'
import play from '../assets/svg/video/play.svg';
const video = () => {
  return (
    <div className="relative flex justify-center items-center w-4/5 bg-theRed max-w-xl  lg:w-2/5 aspect-square p-4">
      <div className="relative w-full h-full">
        <div className="absolute top-0 left-0 right-[-20%] bottom-0">
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source
              src="https://apolix.global/wp-content/uploads/2023/02/Apolix-background.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute inset-0 flex justify-center items-center">
          <button className="bg-theDGray rounded-full shadow-md">
            <img src={play} alt="Play" className="w-12 h-12" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default video