import React from 'react';
import './Input.css';

const Input = ({ name, type, placeholder, onChange, value }) => (
  <input
    className="input"
    name={name}
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
  />
);

export default Input;
