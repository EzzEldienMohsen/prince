import React from 'react';
import { autoFetch } from '../utils';
import { FormRow, FormSelect } from '../subSubComponent';
import { mainFormOptions } from '../assets';
 const w = 'w-[35%] md:w-1/5 ';
const request = async (data) => {
  try {
    const resp = await autoFetch.post('', data);
    console.log(resp.data);
  } catch (error) {
    console.log(error);
  }
};

const FormComponent = () => {
  const [values, setValues] = React.useState({
    name: '',
    phone: '',
    city: '',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    // request(values);
  };

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
        placeHolder="اكتب الاسم هنا"
        handleChange={handleChange}
        w={w}
      />
      <FormRow
        name="phone"
        label=" "
        type="text"
        value={values.phone}
        placeHolder="رقم الهاتف"
        handleChange={handleChange}
        w={w}
      />
      <FormSelect
        name="city"
        label=" "
        value={values.city}
        handleChange={handleChange}
        options={mainFormOptions}
        w={w}
      />
      <button type='submit' className={`${w} bg-theRed text-white font-tajawal py-2`}>ارسال</button>
    </form>
  );
};

export default FormComponent;
