import React from 'react'
import { FormComponent } from '../subComponent';
import { useTranslation } from 'react-i18next';

const FormCard = () => {
  const {t} = useTranslation()
  return (
    <div className="w-full lg:w-5/6 flex px-8 lg:px-16 justify-center my-12 md:my-14 lg:my-20 items-center">
      <div className=" flex flex-col w-full  justify-center py-14 items-center shadow-lg  gap-y-6">
        <h1 className="font-tajawal font-bold text-theRed text-xl md:text-2xl">
          {t('contactFormTitle')}
        </h1>
        <FormComponent />
      </div>
    </div>
  );
}

export default FormCard