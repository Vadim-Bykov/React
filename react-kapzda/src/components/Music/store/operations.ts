import * as api from './../wordApi';
import { actions } from './actions';
import * as types from "./types";

export const authorizeUser = (authData: types.TAuthData): types.TThunk => async (dispatch) => {
   const userData = await api.createUser(authData);
   console.log(userData);
   dispatch(actions.setUserData(userData))
};

export const login = (authData: types.TAuthData): types.TThunk => async (dispatch) => {
   const token = await api.loginUser(authData);
   console.log(token);
   dispatch(actions.setToken(token))
};

export const requestWords = (pageNumber: number, groupNumber: number): types.TThunk => async (dispatch) => {
   const words = await api.getWords(pageNumber, groupNumber);
   console.log(words);
   dispatch(actions.setWords(words))
};