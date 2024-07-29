import React from 'react';
import { autoFetch } from '../utils';
import { FormRow, FormSelect } from '../subSubComponent';
import { useGlobalData } from '../context/GlobalDataContext';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
 const w = 'w-[130px] md:w-[160px] lg:w-[22%]  ';
 const ws = 'w-[83.57px] md:w-[87px] lg:w-[105px] ';
const request = async (data) => {
  try {
    const resp = await autoFetch.post('/contact/send', data);
    toast.success(resp.data.message)
  } catch (error) {
    console.log(error);
  }
};

const FormComponent = () => {
  const {t} = useTranslation()
  const [values, setValues] = React.useState({
    name: '',
    phone: '',
    city: '1',
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
      className="flex justify-start  lg:justify-between w-full px-2 md:px-9 lg:px-36 items-center flex-wrap gap-x-[10px]  gap-y-3"
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
        type="text"
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
        className={`${ws} bg-theRed text-white font-tajawal py-2 px-2`}
      >
        {t("send")}
      </button>
    </form>
  );
};

export default FormComponent;
