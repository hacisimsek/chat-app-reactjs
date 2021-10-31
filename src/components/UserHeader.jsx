import { useContext } from 'react';
import { UserContext } from '../context/login';
import './userHeader.css';
import { ThemeContext } from '../context/ThemeContext';
// import Button from './Button';
import { Link } from 'react-router-dom';

import x from "../images/IconButton.png"

export default function UserHeader() {
  const { selectedUser , onClickedMore} = useContext(UserContext);
  const { darkMode } = useContext(ThemeContext);

  if (!selectedUser) return null;

  return (
    <div className={darkMode ? 'UserHeader-dark' : 'UserHeader'}>
      <div>
        <img
          className="headerImg"
          src="https://via.placeholder.com/64"
          alt={selectedUser.first_name}
        />
      </div>
      <div
        className={darkMode ? 'UserHeader-family-dark' : 'UserHeader-family'}
      >{`${selectedUser.first_name} ${selectedUser.last_name}`}</div>
      <div className="detail-button">
        <Link to={`/chat/:${selectedUser.first_name}/${selectedUser.id}/detail`}  style={{border:"none", borderRadius:"40%", color:"white" }} onClick={onClickedMore}>
          <img  src={x}  alt=""/>
        </Link>
      </div>
    </div>
  );
}
