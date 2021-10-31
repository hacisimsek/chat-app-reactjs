import React, { useContext } from 'react';
import Button from '../components/Button';
import { UserContext } from '../context/login';
import { ThemeContext } from "../context/ThemeContext";

import './Settings.css';
import ThemeBotton from '../components/ButtonTheme';
import logouta from '../images/logout.svg'

export default function Settings() {
  const { logout } = useContext(UserContext);
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={darkMode ? "settings-dark" :"settings"}>
      <div className="left-button">
        <button className="button-logout" style={{ height: '4.01rem' }} onClick={logout}>
          <img src={logouta} alt="logout" />
        </button>
      </div>
      <div className="right-button">
        <ThemeBotton />
      </div>
    </div>
  );
}
