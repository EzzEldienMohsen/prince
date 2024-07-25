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
        className={`py-2 px-4 border-2 w-full font-tajawal focus:border-theRed focus:text-theRed border-black text-black`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
