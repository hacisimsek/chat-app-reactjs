import { useContext } from 'react';
import { UserContext } from '../context/login';
import { ThemeContext } from '../context/ThemeContext';

export default function UserList({ searchTerm }) {
  const { userList, setSelectedUser } = useContext(UserContext);
  const { darkMode } = useContext(ThemeContext);

  const filteredList = userList.filter((user) =>
    `${user.first_name} ${user.last_name} ${user.username}`
      .toLocaleLowerCase()
      .includes(searchTerm.toLocaleLowerCase())
  );
  return (
    <div className={darkMode ? 'user-list-dark' : 'user-list'}>
      {filteredList.map((item) => {
        return (
          <div
            key={item.id}
            className={darkMode ? 'user-list__user-dark' : 'user-list__user'}
            onClick={() => setSelectedUser(item.id)}
          >
            {`${item.first_name} ${item.last_name}`}
          </div>
        );
      })}
    </div>
  );
}
