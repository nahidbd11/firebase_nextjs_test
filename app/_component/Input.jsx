"user client";

import React from "react";

const Input = ({ type, placeholder, value, onChange, icon }) => {
  return (
    <div className="relative">
      <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
        {icon}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="pl-10 pr-4 py-2 border rounded-md border-gray-300 focus:border-my-black focus:outline-none focus:ring focus:ring-blue-200 w-64"
      />
    </div>
  );
};

export default Input;
