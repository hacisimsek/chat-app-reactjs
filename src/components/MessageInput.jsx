import { useContext, useState } from 'react';
import { UserContext } from '../context/login';
import Input from '../components/Input';
import Button from '../components/Button';
import { ThemeContext } from '../context/ThemeContext';

export default function MessageInput() {
  const { handleSendMessages } = useContext(UserContext);
  const { darkMode } = useContext(ThemeContext);

  const [message, setMessage] = useState('');
  return (
    <div className={darkMode ? 'message-input-dark' : 'message-input'}>
      <Input
        value={message}
        placeholder="Send new message..."
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <Button
        text="Send"
        style={{height:"10px" ,marginTop:"25px" , marginLeft:"10px" , marginRight:"20px" , padding:"20px" }}
        onClick={() => {
          handleSendMessages(message);
          setMessage('');
        }}
      />
    </div>
  );
}
