import React from 'react';

export const UserContext = React.createContext({
  user: null,
  userList: [], //userList
  selectedUser: null, //selectedUser
  clikedMore:null,
  setSelectedUser: () => {}, //setSelectedUser
  login: () => {},
  logout: () => {},
  handleSendMessages: () => {},
  onClickedMore: () => {},

});
