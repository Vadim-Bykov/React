import { type } from 'os';
const ADD_MESSAGE = "ADD-MESSAGE";
// const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

type dialogType = {
  id: number
  name: string
}

type messageType = {
  id: number
  message: string
}

const initialState = {
  dialogs: [
    { id: 1, name: "Vadim" },
    { id: 2, name: "Tanya" },
    { id: 3, name: "Eva" },
    { id: 4, name: "Slavik" },
  ] as Array<dialogType>,
  messages: [
    { id: 1, message: "Hello" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Hi!" },
    { id: 4, message: "Yoo" },
  ] as Array<messageType>,
  messageText: null as null | string
};

export type initialStateType = typeof initialState;

const dialogReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: state.messages.length + 1,
            message: action.newMessage,
          },
        ],
        messageText: "",
      };

    default:
      return state;
  }
};

type addMessageActionCreatorType = {
  type: typeof ADD_MESSAGE
  newMessage: string
}

export const addMessageActionCreator = (newMessage: string): addMessageActionCreatorType => {
  return { type: ADD_MESSAGE, newMessage };
};

// export const updateMessageActionCreator = (currentText: string) => {
//   const action = { type: UPDATE_MESSAGE_TEXT, text: currentText };
//   return action;
// };

export default dialogReducer;
