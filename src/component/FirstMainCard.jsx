import React from 'react'
import crane from '../assets/svg/mainPage/crane.svg';
import building from '../assets/svg/mainPage/building.svg';
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';
import { useGlobalData } from '../context/GlobalDataContext';
const FirstMainCard = () => {
  const {t} = useTranslation()
  const {isLoading,data} = useGlobalData()
   const mainFirstCard = [
     {
       id: nanoid(),
       img: building,
       number: data?.homeAbout?.done_projects + '+',
       key: 'mainFirstCard_1',
     },
     {
       id: nanoid(),
       img: crane,
       number: data?.homeAbout?.under_work_projects + '+',
       key: 'mainFirstCard_2',
     },
   ];

 if (isLoading) {
   return <div>Loading...</div>;
 }
  return (
    <div className="bg-theLGray w-full flex just-fy-enenly items-center md:justify-evenly py-8 gap-x-2 md:gap-x-4 lg:gap-x-20">
      {mainFirstCard.map((card)=>{
        return (
          <div
            key={card.id}
            className="flex flex-col  justify-center items-center gap-y-2 lg:gap-y-4"
          >
            <img src={card.img} alt="image" />
            <h1 className="font-tajawal font-bold text-2xl md:text-3xl lg:text-5xl text-black">
              {card.number}
            </h1>
            <p className="font-tajawal font-normal w-3/5 md:w-auto text-black text-center text-sm   md:text-xl">
              {t(card.key)}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default FirstMainCard