import { stopSubmit } from 'redux-form';
import { profileAPI } from '../API/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

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
        posts: state.posts.filter((post) => post.id !== action.postId),
      };
    
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: {...state.profile, photos: action.photo },
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
  return { type: DELETE_POST, postId };
};

export const savePhotoSuccess = (photo) => {
  return { type: SAVE_PHOTO_SUCCESS, photo };
};

export const getUserProfileInfo = (userId) => {
  return async (dispatch) => {
    const res = await profileAPI.getProfileData(userId);
    dispatch(setUserProfile(res.data));
  };
};

export const getUserStatus = (userId) => {
  return async (dispatch) => {
    const res = await profileAPI.getStatus(userId);
    dispatch(setStatus(res.data));
  };
};

export const updateUserStatus = (status) => {
  return async (dispatch) => {
    try {
      const res = await profileAPI.updateStatus(status);
      if (res.data.resultCode === 0) dispatch(setStatus(status));
    } catch (error) {
      alert(error)
    }
  };
};

export const savePhoto = (photo) => {
  return async (dispatch) => {
    const res = await profileAPI.savePhoto(photo);
    if (res.data.resultCode === 0) dispatch(savePhotoSuccess(res.data.data.photos));
  };
};

export const saveProfile = (profile) => {
  return async (dispatch, getState) => {
    const userId = getState().auth.id;
    const res = await profileAPI.saveProfile(profile);
    if (res.data.resultCode === 0) {
      dispatch(getUserProfileInfo(userId));
    } else {
      dispatch(stopSubmit('edit-profile', { _error: res.data.messages[0] }));
      
      return Promise.reject()
      // dispatch(stopSubmit('edit-profile', {'contacts':{facebook: res.data.messages[0]}}));
    }
  };
};


export default profileReducer;
