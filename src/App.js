import React, { useState, useEffect } from 'react';
import { UserContext } from './context/login';
import Routes from './routes';
import mockUsers from './mock-users.json';

import {  ThemeProvider } from './context/ThemeContext';

function App() {
  const [user, setUser] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userList, setUserList] = useState(mockUsers.users);
  const [clikedMore, setClikedMore] = useState(false)

  const onClickedMore = (clickedMore)=>{
    setClikedMore(!clikedMore);
  }
  const handleSetSelectedUser = (userId) => {
    const user = userList.find((user) => user.id === userId);
    if (user) setSelectedUser(user);
  };

  const login = (user) => {
    setUser(user);
    localStorage.setItem('chatAppUser', JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('username');
  };

  const handleSendMessages = (messageText) => {
    const newSelectedUser = {
      ...selectedUser,
      messages: [
        ...selectedUser.messages,
        {
          id: Math.random(),    
          text: messageText,
          sender: user.id,
        },
      ],
    };
    setSelectedUser(newSelectedUser);
    const newUserList = userList.map((u) => {
      if (u.id === selectedUser.id) return newSelectedUser;
      else return u;
    });
    setUserList(newUserList);
  };

  useEffect(() => {
    const userNameFromStorage = localStorage.getItem('chatAppUser');

    if (userNameFromStorage) {
      const userObject = JSON.parse(userNameFromStorage);
      setUser(userObject);
    }
  }, []);

  return (
    <ThemeProvider>
      <UserContext.Provider
        value={{
          user,
          userList,
          selectedUser,
          clikedMore,
          setSelectedUser: handleSetSelectedUser,
          login,
          logout,
          handleSendMessages,
          onClickedMore,
        }}
      >
        <Routes />
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
