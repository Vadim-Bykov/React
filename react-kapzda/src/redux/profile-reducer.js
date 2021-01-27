import { profileAPI } from '../API/api';

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialState = {
  posts: [
    { id: 1, message: 'Hello', likesCount: 11 },
    { id: 2, message: 'How are you?', likesCount: 12 },
    { id: 3, message: 'Hi!', likesCount: 13 },
    { id: 4, message: 'Yoo', likesCount: 14 },
  ],
  postText: 'Hello',
  profile: null,
  status: '',
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
        posts: [
          ...state.posts,
          {
            id: state.posts.length + 1,
            message: state.postText,
            likesCount: 0,
          },
        ],
        postText: '',
      };

    case UPDATE_POST_TEXT:
      // state.postText = action.text;
      // return state;
      return {
        ...state,
        postText: action.text,
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

    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return { type: 'ADD-POST' };
};

export const updatePostActionCreator = (text) => {
  const action = { type: 'UPDATE-POST-TEXT', text: text };
  return action;
};

const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile };
};

export const setStatus = (status) => {
  return { type: SET_STATUS, status };
};

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
