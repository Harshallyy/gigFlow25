import React from 'react';

const Input = ({ label, type = 'text', placeholder, value, onChange, name, error }) => {
  return (
    <div className="mb-4">
      {label && <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none ${error ? 'border-red-500 focus:border-red-500' : 'text-gray-700 focus:border-blue-500'}`}
      />
      {error && <p className="text-red-500 text-xs italic mt-1">{error}</p>}
    </div>
  );
};

export default Input;