import { profileAPI } from '../API/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

const initialState = {
  posts: [
    { id: 1, message: 'Hello', likesCount: 11 },
    { id: 2, message: 'How are you?', likesCount: 12 },
    { id: 3, message: 'Hi!', likesCount: 13 },
    { id: 4, message: 'Yoo', likesCount: 14 },
  ],
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: state.posts.length + 1,
            message: action.newPost,
            likesCount: 0,
          },
        ],
        postText: '',
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    
      case DELETE_POST:
        return {
          ...state,
          posts: state.posts.filter(post => post.id != action.postId)
        };

    default:
      return state;
  }
};

export const addPostActionCreator = (newPost) => {
  return { type: 'ADD-POST', newPost };
};

const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile };
};

export const setStatus = (status) => {
  return { type: SET_STATUS, status };
};

export const deletePost = (postId) => {
  return {type: DELETE_POST, postId}
}

export const getUserProfileInfo = (userId) => {
  return (dispatch) => {
    profileAPI
      .getProfileData(userId)
      .then((res) => dispatch(setUserProfile(res.data)));
  };
};

export const getUserStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((res) => dispatch(setStatus(res.data)));
  };
};

export const updateUserStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((res) => {
      if (res.data.resultCode === 0) dispatch(setStatus(status));
    });
  };
};

export default profileReducer;
