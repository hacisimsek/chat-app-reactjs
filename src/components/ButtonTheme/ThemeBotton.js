import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

import './ThemeBotton.css';
import theme from '../../images/theme.svg';

function ThemeBotton() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const handleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  return (
    <button className="button-theme" onClick={handleTheme}>
      <img src={theme} alt="" />
    </button>
  );
}

export default ThemeBotton;
