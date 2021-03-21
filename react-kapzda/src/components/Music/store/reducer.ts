import * as actionsTypes from './actionTypes';
import { initialState } from './state';
import * as types from './types';

export const wordsReducer = (
  state = initialState,
  action: types.TActions
): types.TInitialState => {
  switch (action.type) {
    case actionsTypes.DICTIONARY_SET_USER_DATA:
      return {
        ...state,
        userData: action.userData,
        isAuth: true,
      };

    case actionsTypes.DICTIONARY_SET_TOKEN:
      return {
        ...state,
        token: action.token,
        isToken: true,
      };

    case actionsTypes.DICTIONARY_SET_WORDS:
      return {
        ...state,
        words: action.words,
      };

    default:
      return state;
  }
};
