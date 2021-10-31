import { useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';
import './Login.css';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function Login() {
  const { user, login } = useLogin();
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const { pathname } = useLocation();

  if (user && pathname === '/login') return <Redirect to="/chat" />;
  const handleSubmitLogin = (e) => {
    if (username && firstName && lastName) {
      login({
        id: Math.random(),
        username,
        firstName,
        lastName,
      });
    }

    e.preventDefault();
  };

  return (
    <div className="login">
      <h3>Log in to your account</h3>
      <div className="login-input">
        <Input
          type="text"
          name="username"
          placeholder="User Name"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>
      <div className="login-input">
        <Input
          type="text"
          name="first_name"
          placeholder="First Name"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
      </div>
      <div className="login-input">
        <Input
          type="text"
          name="last_name"
          placeholder="Last Name"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </div>
      <div>
        <Button
          style={{ width: '250px' }}
          text="Login"
          onClick={handleSubmitLogin}
        >
          Login
        </Button>
      </div>
    </div>
  );
}
