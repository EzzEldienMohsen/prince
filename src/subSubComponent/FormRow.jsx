import React from 'react'



const FormRow = ({  name,
  label,
  type,
  value,
  handleChange,
  placeHolder,
  w
}) => {
  return (
    <div
      className={`flex flex-col justify-center font-tajawal items-start ${w}`}
    >
      <label className="capitalize" htmlFor={name}>
        {label || name}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        placeholder={placeHolder}
        onChange={handleChange}
        className={`py-2 px-4 border-[1px] w-full font-tajawal focus:outline-theRed focus:placeholder-theRed active:border-theRed focus:text-theRed border-[#7C8893] text-theFontColor`}
      />
    </div>
  );
}

export default FormRow