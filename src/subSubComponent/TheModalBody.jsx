import React from 'react'
import ImageWithFallback from './ImageWithFallBack';

const TheModalBody = ({ theData, link, slideId, nextSlideId, prevSlideId }) => {
  return (
    <dialog
      id={link.id}
      className="modal w-full bg-transparent flex justify-center items-center"
    >
      <div className="flex flex-col justify-center items-start gap-y-3 w-4/5 ">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost">✕</button>
        </form>
        <div className="carousel w-full">
          <div
            id={slideId}
            className="carousel-item flex justify-center relative w-full"
          >
            <ImageWithFallback
              src={link.image}
              alt={link.title}
              className="w-[271.66px] h-[218.22px] md:w-[480.63px] md:h-[386.08px] lg:w-[741.65px] lg:h-[595] aspect-auto"
            />{' '}
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href={`#${prevSlideId}`} className="btn btn-circle">
                ❮
              </a>
              <a href={`#${nextSlideId}`} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
          {theData?.images?.map((thumb, thumbIndex) => (
            <a
              key={thumb.id}
              href={`#slide${thumbIndex + 1}`}
              className="w-16 h-16"
            >
              <ImageWithFallBack
                src={thumb.image}
                alt={thumb.title}
                className="w-full h-[180px] aspect-auto"
              />
            </a>
          ))}
        </div>
      </div>
    </dialog>
  );
};

export default TheModalBody