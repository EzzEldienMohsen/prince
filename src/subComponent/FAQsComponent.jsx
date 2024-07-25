import React from 'react'
import { theFAQ } from '../assets';

const FAQsComponent = () => {
  return (
    <div className='flex flex-col justify-start items-start w-full '>
        {theFAQ.map((faq)=>{
            return (
              <div
              key={faq.id}
                tabIndex={0}
                className="collapse collapse-arrow border-base-300 text-start border border-l-0 border-r-0 rounded-none bg-theLGray"
              >
                <div className="collapse-title text-xl font-medium">
                  {faq.text}
                </div>
                <div className="collapse-content">
                  <p>
                    tabindex={0} attribute is necessary to make the div
                    focusable
                  </p>
                </div>
              </div>
            );
        })}
    </div>
  )
}

export default FAQsComponent