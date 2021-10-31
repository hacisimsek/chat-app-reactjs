import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router';
import Detail from '../Detail';
import './Chat.css';

import SearchInput from '../../components/SearchInput';
import Settings from '../../components/Settings';
import UserHeader from '../../components/UserHeader';
import UserList from '../../components/UserList';
import MessageInput from '../../components/MessageInput';
import Messages from '../../components/Messages';
import { UserContext } from '../../context/login';

function Chat() {
  const { user, clikedMore,selectedUser } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState('');

  if (!user) return <Redirect to="/login" />;
  return (
    <div className="chat-container">
      <div className="left-side">
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <UserList searchTerm={searchTerm} />
        <Settings />
      </div>
      <div className="right-side">
        {clikedMore ? (
          <>
            {/* <Redirect to={`/chat/:${selectedUser.first_name/${selectedUser.id}/detail}`}> */}
          <Detail />
          </>
          
        ) : (
          <>
            <UserHeader />
            <Messages />
            <MessageInput />
          </>
        )}
      </div>
    </div>
  );
}

export default Chat;
