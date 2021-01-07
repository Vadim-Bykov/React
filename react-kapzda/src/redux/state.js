const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hello", likesCount: 11 },
        { id: 2, message: "How are you?", likesCount: 12 },
        { id: 3, message: "Hi!", likesCount: 13 },
        { id: 4, message: "Yoo", likesCount: 14 },
      ],
      postText: "Hello",
    },
    dialogPage: {
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
    },
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {},

  subscriber(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === "ADD-POST") {
      this._state.profilePage.posts.push({
        id: this._state.profilePage.posts.length + 1,
        message: this._state.profilePage.postText,
        likesCount: 0,
      });
      this._state.profilePage.postText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-POST-TEXT") {
      this._state.profilePage.postText = action.text;
      this._callSubscriber(this._state);
    } else if (action.type === "ADD-MESSAGE") {
      this._state.dialogPage.messages.push({
        id: this._state.dialogPage.messages.length + 1,
        message: this._state.dialogPage.messageText,
      });
      this._state.dialogPage.messageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-MESSAGE-TEXT") {
      this._state.dialogPage.messageText = action.text;
      this._callSubscriber(this._state);
    }
  },

  // addPost() {
  //   this._state.profilePage.posts.push({
  //     id: this._state.profilePage.posts.length + 1,
  //     message: this._state.profilePage.postText,
  //     likesCount: 0,
  //   });
  //   this._state.profilePage.postText = "";
  //   this._callSubscriber(this._state);
  // },

  // updatePostText(text) {
  //   this._state.profilePage.postText = text;
  //   this._callSubscriber(this._state);
  // },

  // addMessage() {
  //   this._state.dialogPage.messages.push({
  //     id: this._state.dialogPage.messages.length + 1,
  //     message: this._state.dialogPage.messageText,
  //   });
  //   this._callSubscriber(this._state);
  //   this._state.dialogPage.messageText = "";
  // },

  // updateMessage(text) {
  //   this._state.dialogPage.messageText = text;
  //   this._callSubscriber(this._state);
  // },
};

export const addPostActionCreator = () => {
  return { type: "ADD-POST" };
};

export const updatePostActionCreator = (text) => {
  const action = { type: "UPDATE-POST-TEXT", text: text };
  return action;
};

export const addMessageActionCreator = () => {
  return { type: "ADD-MESSAGE" };
};

export const updateMessageActionCreator = (currentText) => {
  const action = { type: "UPDATE-MESSAGE-TEXT", text: currentText };
  return action;
};

export default store;
