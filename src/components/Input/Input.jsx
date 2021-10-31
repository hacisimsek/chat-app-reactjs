import React from 'react';
import './Input.css';

const Input = ({ type, name, onChange, placeholder, value, className = "input"}) => {
  return (
    <input
      className={className}
      value={value}
      type={type}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
export default Input;
