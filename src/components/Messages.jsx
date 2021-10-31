import { useContext } from 'react';
import { UserContext } from '../context/login';
import { ThemeContext } from "../context/ThemeContext";


export default function Messages() {
  const { user , selectedUser } = useContext(UserContext);
  const { darkMode } = useContext(ThemeContext);


  return (
    <div className={darkMode ? "messages-dark" : "messages" }>
      {selectedUser
        ? selectedUser.messages.map((message, index) => {
            return (
              <div className={`message-container ${message.sender === user.id ? "from-me":"" }`} key={index}>
                <div className={darkMode ? "message-dark" : "message"  }>{message.text}</div>
              </div>
            );
          })
        : null}
    </div>
  );
}
