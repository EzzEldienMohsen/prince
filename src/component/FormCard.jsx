import React from 'react'
import { FormComponent } from '../subComponent';
import { useTranslation } from 'react-i18next';

const FormCard = () => {
  const {t} = useTranslation()
  return (
    <div className="w-full lg:w-4/5 flex flex-col  px-8 lg:px-16 py-8 justify-center items-center shadow-2xl my-20 gap-y-10">
      <h1 className="font-tajawal font-bold text-theRed text-xl md:text-2xl">
        {t('contactFormTitle')}
      </h1>
      <FormComponent />
    </div>
  );
}

export default FormCard