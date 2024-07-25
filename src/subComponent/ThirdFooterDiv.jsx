import React from 'react'
import { Link } from 'react-router-dom';

const ThirdFooterDiv = () => {
  return (
    <div className="w-full  pb-8 bg-theDGray flex justify-center items-center">
        <div className="border-t-[2px] border-theLGray px-4 lg:px-0 w-full gap-y-4 md:gap-y-0 md:w-[96vw] lg:w-4/5 py-3 md:py-6  flex flex-col justify-center items-center md:flex-row md:justify-between ">
          <p className="text-theLGray font-tajawal">
            © جميع حقوق النشر محفوظة 2024
          </p>
          <div className="flex justify-between items-center gap-x-4">
            <Link to="/" className="text-theLGray font-tajawal">
              سياسة الخصوصية
            </Link>
            <div className="text-theLGray font-tajawal">|</div>
            <Link to="/" className="text-theLGray font-tajawal">
              حقوق الملكية
            </Link>
          </div>
        </div>
      </div>
  )
}

export default ThirdFooterDiv