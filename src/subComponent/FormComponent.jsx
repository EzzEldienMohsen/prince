import React from 'react';
import { autoFetch } from '../utils';
import { FormRow, FormSelect } from '../subSubComponent';
import { mainFormOptions } from '../assets';
import { useGlobalData } from '../context/GlobalDataContext';
import { useTranslation } from 'react-i18next';
 const w = 'w-[35%] md:w-1/5 ';
const request = async (data) => {
  try {
    const resp = await autoFetch.post('/contact/send', data);
  } catch (error) {
    console.log(error);
  }
};

const FormComponent = () => {
  const {t} = useTranslation()
  const [values, setValues] = React.useState({
    name: '',
    phone: '',
    city: '',
  });
  const {data, isLoading} = useGlobalData() 
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
   const transformedData = {
     ...values,
     city: parseInt(values.city),
     phone:parseInt(values.phone)
   };

  const onSubmit = (e) => {
    e.preventDefault();
    request(transformedData);
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <form
      method="post"
      onSubmit={onSubmit}
      className="flex justify-evenly w-full items-center flex-wrap gap-x-2 gap-y-4"
    >
      <FormRow
        name="name"
        label=" "
        type="text"
        value={values.name}
        placeHolder={t('nameFormRow')}
        handleChange={handleChange}
        w={w}
      />
      <FormRow
        name="phone"
        label=" "
        type="tel"
        value={values.phone}
        placeHolder={t('phoneFormRow')}
        handleChange={handleChange}
        w={w}
      />
      <FormSelect
        name="city"
        label=" "
        value={values.city}
        handleChange={handleChange}
        options={data?.cities}
        w={w}
      />
      <button
        type="submit"
        className={`${w} bg-theRed text-white font-tajawal py-2`}
      >
        ارسال
      </button>
    </form>
  );
};

export default FormComponent;
