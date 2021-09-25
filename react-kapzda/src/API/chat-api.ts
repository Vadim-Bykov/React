let subscribers = [] as SubscriberType[];

let ws: WebSocket | null = null;

const closeHandler = () => {
  setTimeout(createChannel, 3000);
};

const messageHandler = (e: MessageEvent) => {
  const newMessages = JSON.parse(e.data);
  subscribers.forEach((subscriber) => subscriber(newMessages));
};

const createChannel = () => {
  ws?.removeEventListener('close', closeHandler);
  ws?.close();

  ws = new WebSocket(
    'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'
  );

  ws?.addEventListener('close', closeHandler);
  ws?.addEventListener('message', messageHandler);
};

export const chatApi = {
  startChannel() {
    createChannel();
  },

  stopChannel() {
    subscribers = [];
    ws?.removeEventListener('close', closeHandler);
    ws?.removeEventListener('message', messageHandler);
    ws?.close();
  },

  subscribe(callback: (messages: ChatMessageType[]) => void) {
    subscribers.push(callback);

    return () => {
      subscribers = subscribers.filter((subscriber) => subscriber !== callback);
    };
  },

  unsubscribe(callback: SubscriberType) {
    subscribers = subscribers.filter((subscriber) => subscriber !== callback);
  },

  sendMessage(message: string) {
    ws?.send(message);
  },
};

type SubscriberType = (messages: ChatMessageType[]) => void;

export type ChatMessageType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};
