import React from 'react';
import './Button.css';

const Button = ({ text, onClick , style }) => {
  return <button className="button" style={style} onClick={onClick}>{text}</button>;
};
export default Button;
