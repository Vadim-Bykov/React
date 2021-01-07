const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      state.posts.push({
        id: state.posts.length + 1,
        message: state.postText,
        likesCount: 0,
      });
      state.postText = "";
      return state;

    case UPDATE_POST_TEXT:
      state.postText = action.text;
      return state;

    default:
      return state;
  }
};

export default profileReducer;
