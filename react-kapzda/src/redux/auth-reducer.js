import { stopSubmit } from 'redux-form';
import { authAPI, profileAPI } from '../API/api';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_PHOTO = 'SET_USER_PHOTO';

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  photo: null,
  isFetching: true,
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

export const getAuthUserData = () => {
  return (dispatch) => {
    authAPI.getAuthData().then((res) => {
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
    authAPI.login(email, password, rememberMe).then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(getAuthUserData());
      } else {
        dispatch(
          stopSubmit('login', { _error: res.data.messages[0] || 'Some error' })
        );
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
