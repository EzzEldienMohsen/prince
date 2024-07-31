import React from 'react'
import ImageWithFallback from './ImageWithFallBack';
import { useGlobalContext } from './../context/GlobalContext';
import close from "../assets/svg/projectCard/close.svg"
const TheModalBody = ({ theData, link, slideId, nextSlideId, prevSlideId }) => {
  const {isArabic} = useGlobalContext()
  console.log(link,theData)
  return (
    <dialog
      id={link.id}
      className="modal px-8 lg:px-16 w-full bg-transparent flex justify-center items-center"
    >
      <div className="flex flex-col justify-center items-start gap-y-3 w-4/5 ">
        <form method="dialog" className=" w-full">
          <button className={`btn btn-sm btn-circle btn-ghost absolute top-5 ${isArabic?"left-5 md:left-10":"right-5 md:right-10"} `}>
          <img src={close} alt="close" />
          </button>
        </form>
        <div className="carousel w-full">
          <div
            id={slideId}
            className="carousel-item flex justify-center relative w-full"
          >
            <ImageWithFallback
              src={link.images[0]}
              alt={link.title}
              className=" aspect-auto"
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