const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

const dialogReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      state.messages.push({
        id: state.messages.length + 1,
        message: state.messageText,
      });
      state.messageText = "";
      return state;

    case UPDATE_MESSAGE_TEXT:
      state.messageText = action.text;
      return state;

    default:
      return state;
  }
};

export default dialogReducer;
