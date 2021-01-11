const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

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
  messageText: "",
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      // state.messages.push({
      //   id: state.messages.length + 1,
      //   message: state.messageText,
      // });
      // state.messageText = "";
      // return state;
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: state.messages.length + 1,
            message: state.messageText,
          },
        ],
        messageText: "",
      };

    case UPDATE_MESSAGE_TEXT:
      // state.messageText = action.text;
      // return state;
      return {
        ...state,
        messageText: action.text,
      };

    default:
      return state;
  }
};

export const addMessageActionCreator = () => {
  return { type: "ADD-MESSAGE" };
};

export const updateMessageActionCreator = (currentText) => {
  const action = { type: "UPDATE-MESSAGE-TEXT", text: currentText };
  return action;
};

export default dialogReducer;
