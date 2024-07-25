import React from 'react'
import { mainFirstCard } from '../assets';

const FirstMainCard = () => {
  return (
    <div className="bg-theLGray w-full flex justify-center items-center py-8 gap-x-2 md:gap-x-4 lg:gap-x-10">
      {mainFirstCard.map((card)=>{
        return <div key={card.id} className='flex flex-col justify-center items-center gap-y-2 lg:gap-y-4'>
            <img src={card.img} alt="image"/>
            <h1 className='font-tajawal font-semiBold text-xl md:text-2xl  text-black'>{card.number}</h1>
            <p className='font-tajawal font-light text-black text-center text-sm w-4/5 md:text-lg'>{card.text}</p>

        </div>
      })}
    </div>
  );
}

export default FirstMainCard