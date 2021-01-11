const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

const initialState = {
  posts: [
    { id: 1, message: "Hello", likesCount: 11 },
    { id: 2, message: "How are you?", likesCount: 12 },
    { id: 3, message: "Hi!", likesCount: 13 },
    { id: 4, message: "Yoo", likesCount: 14 },
  ],
  postText: "Hello",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      // state.posts.push({
      //   id: state.posts.length + 1,
      //   message: state.postText,
      //   likesCount: 0,
      // });
      // state.postText = "";
      // return state;

      return {
        ...state,
        posts: [...state.posts, {
            id: state.posts.length + 1,
            message: state.postText,
            likesCount: 0,
        }],
        postText:''
      }

    case UPDATE_POST_TEXT:
      // state.postText = action.text;
      // return state;
      return {
        ...state,
        postText: action.text
      }

    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return { type: "ADD-POST" };
};

export const updatePostActionCreator = (text) => {
  const action = { type: "UPDATE-POST-TEXT", text: text };
  return action;
};

export default profileReducer;
