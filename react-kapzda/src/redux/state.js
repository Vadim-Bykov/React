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
      messageText: "Yoo!",
    },
  },

  _callSubscriber() {},

  getState() {
    return this._state;
  },

  addPost() {
    this._state.profilePage.posts.push({
      id: this._state.profilePage.posts.length + 1,
      message: this._state.profilePage.postText,
      likesCount: 0,
    });
    this._state.profilePage.postText = "";
    this._callSubscriber(this._state);
  },

  updatePostText(text) {
    this._state.profilePage.postText = text;
    this._callSubscriber(this._state);
  },

  addMessage() {
    this._state.dialogPage.messages.push({
      id: this._state.dialogPage.messages.length + 1,
      message: this._state.dialogPage.messageText,
    });
    this._callSubscriber(this._state);
    this._state.dialogPage.messageText = "";
  },

  updateMessage(text) {
    this._state.dialogPage.messageText = text;
    this._callSubscriber(this._state);
  },

  subscriber(observer) {
    this._callSubscriber = observer;
  },
};

// let renderEntireTree = () => {};

// const state = {
//   profilePage: {
//     posts: [
//       { id: 1, message: "Hello", likesCount: 11 },
//       { id: 2, message: "How are you?", likesCount: 12 },
//       { id: 3, message: "Hi!", likesCount: 13 },
//       { id: 4, message: "Yoo", likesCount: 14 },
//     ],
//     postText: "Hello",
//   },
//   dialogPage: {
//     dialogs: [
//       { id: 1, name: "Vadim" },
//       { id: 2, name: "Tanya" },
//       { id: 3, name: "Eva" },
//       { id: 4, name: "Slavik" },
//     ],
//     messages: [
//       { id: 1, message: "Hello" },
//       { id: 2, message: "How are you?" },
//       { id: 3, message: "Hi!" },
//       { id: 4, message: "Yoo" },
//     ],
//     messageText: "Yoo!",
//   },
// };

// export const addPost = () => {
//   state.profilePage.posts.push({
//     id: state.profilePage.posts.length + 1,
//     message: state.profilePage.postText,
//     likesCount: 0,
//   });
//   state.profilePage.postText = "";
//   renderEntireTree(state);
// };

// export const updatePostText = (text) => {
//   state.profilePage.postText = text;
//   renderEntireTree(state);
// };

// export const addMessage = () => {
//   state.dialogPage.messages.push({
//     id: state.dialogPage.messages.length + 1,
//     message: state.dialogPage.messageText,
//   });
//   renderEntireTree(state);
//   state.dialogPage.messageText = "";
// };

// export const updateMessage = (text) => {
//   state.dialogPage.messageText = text;
//   renderEntireTree(state);
// };

// export const subscriber = (observer) => {
//    renderEntireTree = observer;
// };

export default store;
