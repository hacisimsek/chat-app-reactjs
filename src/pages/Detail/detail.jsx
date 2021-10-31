import { useContext } from 'react';
import { UserContext } from '../../context/login';
import { ThemeContext } from '../../context/ThemeContext';
import { Link, Redirect } from 'react-router-dom';
import './Detail.css';
import x from '../../images/Vector.svg';

const Detail = () => {
  const { selectedUser,onClickedMore } = useContext(UserContext);
  const { darkMode } = useContext(ThemeContext);

  if (!selectedUser) return <Redirect to="/chat" />;

  return (
    <div className={darkMode ? "fullbody" : ""}>
      <div className="button-link">
          <Link to="/chat" onClick={onClickedMore}>
            <img src={x} alt="" />
          </Link>
        </div>
    <div className={darkMode ? 'detail-body-dark' : 'detail-body'}>
      <div>
        <div className="detail-img">
          <img
            className="headerImg"
            src="https://via.placeholder.com/100"
            alt={selectedUser.first_name}
          />
        </div>
        <div className="detail-name">
          <h3>
            {selectedUser.first_name} {selectedUser.last_name}
          </h3>
        </div>
        <span className="detail-span">Last seen 2 hours ago</span>

        <div className="detail-foto">
          <img
            src="https://i.hizliresim.com/50llkc4.png"
            style={{ width: '197px', height: '110px', margin:"1rem"}}
            alt="message"
          />

          <img
            src="https://i.hizliresim.com/4un86pk.PNG"
            style={{ width: '197px', height: '110px', margin:"1rem" }}
            alt="message"
          />

          <img
            src="https://i.hizliresim.com/s48soar.png"
            style={{ width: '197px', height: '110px' , margin:"1rem"}}
            alt="message"
          />
        </div>
      </div>
    </div>
    </div>
  );
};
export default Detail;
