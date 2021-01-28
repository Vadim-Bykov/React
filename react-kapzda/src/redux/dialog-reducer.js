const ADD_MESSAGE = "ADD-MESSAGE";

const initialState = {
  dialogs: [
    { id: 1, name: "Vadim" },
    { id: 2, name: "Tanya" },
    { id: 3, name: "Eva" },
    { id: 4, name: "Slavik" },
  ],
  messages: [
    { id: 1, message: "Hello" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Hi!" },
    { id: 4, message: "Yoo" },
  ],
};

const dialogReducer = (state = initialState, action) => {
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

export const addMessageActionCreator = (newMessage) => {
  return { type: ADD_MESSAGE, newMessage };
};

export const updateMessageActionCreator = (currentText) => {
  const action = { type: "UPDATE-MESSAGE-TEXT", text: currentText };
  return action;
};

export default dialogReducer;
