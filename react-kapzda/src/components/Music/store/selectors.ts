import { AppStateType } from '../../../redux/redux-store';

export const getUserData = (state: AppStateType) => state.words.userData;
export const getToken = (state: AppStateType) => state.words.token;
export const getWords = (state: AppStateType) => state.words.words;
export const getIsAuth = (state: AppStateType) => state.words.isAuth;
export const getIsToken = (state: AppStateType) => state.words.isToken;
