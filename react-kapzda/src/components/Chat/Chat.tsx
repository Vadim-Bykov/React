import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChatMessageType } from '../../API/chat-api';
import { startMessagesListening } from '../../redux/chat-reducer';
import { AppStateType } from '../../redux/redux-store';

export const Chat: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startMessagesListening());
  }, []);

  return <Messages />;
};

const Messages: React.FC = () => {
  const messages = useSelector((state: AppStateType) => state.chat.messages);

  return (
    <div style={{ height: '300px', overflow: 'auto' }}>
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </div>
  );
};

const Message: React.FC<{ message: ChatMessageType }> = ({ message }) => {
  return (
    <div>
      <img src={message.photo} style={{ width: '30px' }} />
      <b>{message.userName}</b>
      <br />
      {message.message}
      <hr />
    </div>
  );
};
