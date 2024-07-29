import React from 'react';

const FormSelect = ({ name, label, value, handleChange, options, w }) => {
  return (
    <div
      className={`flex flex-col justify-center font-tajawal items-start ${w}`}
    >
      <label className="capitalize" htmlFor={name}>
        {label || name}
      </label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        className={`py-2 px-4 border-[1px] w-full font-tajawal focus:border-theRed focus:text-theRed border-[#7C8893] text-theFontColor`}
      >
        {options?.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
