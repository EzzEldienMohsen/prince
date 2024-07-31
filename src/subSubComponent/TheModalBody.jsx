import React, { useState } from 'react';
import ImageWithFallback from './ImageWithFallBack';
import { useGlobalContext } from './../context/GlobalContext';
import close from '../assets/svg/projectCard/close.svg';

const TheModalBody = ({ link }) => {
  const { isArabic } = useGlobalContext();
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = link?.images?.length || 0;

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <dialog
      id={link.id}
      className="modal px-8 lg:px-16 w-full bg-transparent flex justify-center items-center"
    >
      <div className="flex flex-col justify-center items-start gap-y-3 w-4/5">
        <form method="dialog" className="w-full">
          <button
            className={`btn btn-sm btn-circle btn-ghost absolute top-5 ${
              isArabic ? 'left-5 md:left-10' : 'right-5 md:right-10'
            }`}
          >
            <img src={close} alt="close" />
          </button>
        </form>
        <div className="carousel w-full">
          {link.images.map((img, index) => (
            <div
              key={img}
              id={`slider${index}`}
              className={`carousel-item flex justify-center relative w-full ${
                index === currentSlide ? 'block' : 'hidden'
              }`}
            >
              <ImageWithFallback
                src={img}
                alt={link.title || `Slide ${index + 1}`}
                className="aspect-auto"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <button onClick={goToPrevSlide} className="btn btn-circle">
                  ❮
                </button>
                <button onClick={goToNextSlide} className="btn btn-circle">
                  ❯
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex w-full justify-center gap-2 h-[50px] py-2">
          {link.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-16 h-16 ${
                currentSlide === index ? 'ring ring-offset-2 ring-gray-500' : ''
              }`}
            >
              <ImageWithFallback
                src={image}
                alt={link.title || `Thumbnail ${index + 1}`}
                className=""
              />
            </button>
          ))}
        </div>
      </div>
    </dialog>
  );
};

export default TheModalBody;
