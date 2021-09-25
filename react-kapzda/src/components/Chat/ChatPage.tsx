import Rect, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../../redux/chat-reducer';
import { Chat } from './Chat';

const ChatPage: React.FC = () => {
  return (
    <div>
      <MessageForm />

      <Chat />
    </div>
  );
};

const MessageForm: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>(
    'pending'
  );

  const dispatch = useDispatch();

  const sendMessageHandler = () => {
    if (!message) return;

    dispatch(sendMessage(message));

    setMessage('');
  };

  return (
    <div>
      <textarea
        onChange={(e) => setMessage(e.currentTarget.value)}
        value={message}
        style={{ width: 200, height: 100, overflow: 'auto' }}
      />

      <button disabled={false} onClick={sendMessageHandler}>
        submit
      </button>
    </div>
  );
};

export default ChatPage;
