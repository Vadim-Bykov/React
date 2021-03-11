import { FormAction, stopSubmit } from 'redux-form';
import { ResultCodeCaptcha, ResultCodeEnum } from '../API/api';
import { authAPI } from '../API/auth-api';
import { profileAPI } from '../API/profile-api';
import { BaseThunkType, InferActionsTypes } from './redux-store';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_PHOTO = 'SET_USER_PHOTO';
const TOGGLE_LOGIN_IN_PROGRESS = 'TOGGLE_LOGIN_IN_PROGRESS';
const AUTH_GET_CAPTCHA_SUCCESS = 'AUTH_GET_CAPTCHA_SUCCESS';

// export type initialStateType = {
//   id: number | null,
//   email: string | null,
//   login: string | null,
//   isAuth: boolean,
//   photo: any,
//   isFetching: boolean,
//   loginInProgress: boolean,
//   captchaUrl: string | null
// }

const initialState = {
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false as boolean,
  photo: null as string | null,
  isFetching: true as boolean,
  loginInProgress: false as boolean,
  captchaUrl: null as string | null,
};

const authReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
    case AUTH_GET_CAPTCHA_SUCCESS:
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

export const actions = {
  setAuthUserData: (
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
  ) =>
    ({
      type: SET_USER_DATA,
      payload: { id, email, login, isAuth },
    } as const),

  getCaptchaUrlSuccess: (captchaUrl: string) => {
    return { type: AUTH_GET_CAPTCHA_SUCCESS, payload: { captchaUrl } } as const;
  },

  setUserPhoto: (photo: string) => {
    return { type: SET_USER_PHOTO, photo } as const;
  },

  toggleLoginInProgress: (progress: boolean) => {
    return { type: TOGGLE_LOGIN_IN_PROGRESS, progress } as const;
  },
};

// type DispatchType = Dispatch<ActionsTypes>
// type GetStateType = () => AppStateType;
// type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getAuthUserData = (): ThunkType => {
  return async (dispatch, getState) => {
    const res = await authAPI.me();
    if (res.resultCode === ResultCodeEnum.Success) {
      const { id, email, login } = res.data;
      dispatch(actions.setAuthUserData(id, email, login, true));

      const result = await profileAPI.getProfileData(id);
      dispatch(
        actions.setUserPhoto(
          result.photos.small ||
            'https://www.meme-arsenal.com/memes/0b37d82bcfd11cb3196fa5329f3bff0f.jpg'
        )
      );
    }
  };
};

export const login = (
  email: string,
  password: string,
  rememberMe: boolean,
  captcha?: string
): ThunkType => {
  return async (dispatch, getState) => {
    dispatch(actions.toggleLoginInProgress(true));
    const res = await authAPI.login(email, password, rememberMe, captcha);
    if (res.resultCode === ResultCodeEnum.Success) {
      dispatch(getAuthUserData());
      dispatch(actions.toggleLoginInProgress(false));
      getState().auth.captchaUrl = null;
    } else {
      if (res.resultCode === ResultCodeCaptcha.CaptchaIsRequired)
        dispatch(getCaptcha());

      dispatch(
        stopSubmit('login', { _error: res.messages[0] || 'Some error' })
      );
      dispatch(actions.toggleLoginInProgress(false));
    }
  };
};

export const logout = (): ThunkType => {
  return async (dispatch) => {
    const res = await authAPI.logout();
    if (res.data.resultCode === 0)
      dispatch(actions.setAuthUserData(null, null, null, false));
  };
};

// Можно использовать BaseThunkType чтобы не ограничивать принимаемые actions из других reducers
const getCaptcha = (): BaseThunkType => async (dispatch) => {
  const res = await authAPI.getCaptcha();
  dispatch(actions.getCaptchaUrlSuccess(res.url));
};

export default authReducer;

export type initialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsTypes | FormAction>;

// type ActionsTypes = setAuthUserDataActionType | getCaptchaUrlSuccessActionType | setUserPhotoType | toggleLoginInProgressType;

// type payloadActionType = {
//   id: number | null
//   email: string | null
//   login: string | null
//   isAuth: boolean
// };

// type setAuthUserDataActionType = {
//   type: typeof SET_USER_DATA,
//   payload: payloadActionType
// }

// export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): setAuthUserDataActionType => {
//   return { type: SET_USER_DATA, payload: { id, email, login, isAuth } };
// };

// type getCaptchaUrlSuccessActionType = {
//   type: typeof AUTH_GET_CAPTCHA_SUCCESS
//   payload: {captchaUrl: string}
// }

// const getCaptchaUrlSuccess = (captchaUrl: string): getCaptchaUrlSuccessActionType => {
//   return {type: AUTH_GET_CAPTCHA_SUCCESS, payload: {captchaUrl}}
// }

// type setUserPhotoType = {
//   type: typeof SET_USER_PHOTO
//   photo: string
// }

// export const setUserPhoto = (photo: string): setUserPhotoType => {
//   return { type: SET_USER_PHOTO, photo };
// };

// type toggleLoginInProgressType = {
//   type: typeof TOGGLE_LOGIN_IN_PROGRESS
//   progress: boolean
// }

// export const toggleLoginInProgress = (progress: boolean): toggleLoginInProgressType => {
//   return { type: TOGGLE_LOGIN_IN_PROGRESS, progress };
// };
