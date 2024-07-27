import React from 'react'
import { theFAQ } from '../assets';
import { useGlobalData } from '../context/GlobalDataContext';

const FAQsComponent = () => {
  const { data, isLoading } = useGlobalData();


   if (isLoading) {
     return (
       <div className="w-full aspect-square flex justify-center items-center">
         <span className="loading loading-spinner text-theRed loading-xl"></span>
       </div>
     );
   }
  return (
    <div className="flex flex-col justify-start items-start w-full ">
      {data?.faqs?.map((faq) => {
        return (
          <div
            key={faq.id}
            tabIndex={0}
            className="collapse collapse-arrow border-base-300 text-start border border-l-0 border-r-0 rounded-none bg-theLGray"
          >
            <div className="collapse-title text-xl font-medium">
              {faq.question}
            </div>
            <div className="collapse-content">
              <p>
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FAQsComponent