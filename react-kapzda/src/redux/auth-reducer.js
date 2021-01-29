import { stopSubmit } from 'redux-form';
import { authAPI, profileAPI } from '../API/api';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_PHOTO = 'SET_USER_PHOTO';
const TOGGLE_LOGIN_IN_PROGRESS = 'TOGGLE_LOGIN_IN_PROGRESS';

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  photo: null,
  isFetching: true,
  loginInProgress: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };

    case SET_USER_PHOTO:
      return {
        ...state,
        photo: action.photo,
      };

    case TOGGLE_LOGIN_IN_PROGRESS:
      return {
        ...state,
        loginInProgress: action.progress,
      };

    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login, isAuth) => {
  return { type: SET_USER_DATA, payload: { id, email, login, isAuth } };
};

export const setUserPhoto = (photo) => {
  return { type: SET_USER_PHOTO, photo };
};

export const toggleLoginInProgress = (progress) => {
  return { type: TOGGLE_LOGIN_IN_PROGRESS, progress };
};

export const getAuthUserData = () => {
  return (dispatch) => {
    return authAPI.getAuthData().then((res) => {
      if (res.data.resultCode === 0) {
        const { id, email, login } = res.data.data;
        dispatch(setAuthUserData(id, email, login, true));
        profileAPI
          .getProfileData(id)
          .then((res) =>
            dispatch(
              setUserPhoto(
                res.data.photos.small ||
                  'https://www.meme-arsenal.com/memes/0b37d82bcfd11cb3196fa5329f3bff0f.jpg'
              )
            )
          );
      }
    });
  };
};

export const login = (email, password, rememberMe = false) => {
  return (dispatch) => {
    dispatch(toggleLoginInProgress(true));
    authAPI.login(email, password, rememberMe).then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(getAuthUserData());
        dispatch(toggleLoginInProgress(false));
      } else {
        dispatch(
          stopSubmit('login', { _error: res.data.messages[0] || 'Some error' })
        );
        dispatch(toggleLoginInProgress(false));
      }
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    authAPI.logout().then((res) => {
      if (res.data.resultCode === 0)
        dispatch(setAuthUserData(null, null, null, false));
    });
  };
};

export default authReducer;
