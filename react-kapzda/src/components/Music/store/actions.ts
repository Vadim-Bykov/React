import * as actionTypes from './actionTypes';
import * as types from './types';

export const actions = {
  setUserData: (userData: types.TUserData) => ({
    type: actionTypes.DICTIONARY_SET_USER_DATA,
    userData,
  } as const),

  setToken: (token: string) => ({
    type: actionTypes.DICTIONARY_SET_TOKEN,
    token,
   } as const),
  
   setWords: (words: Array<types.TWord>) => ({
     type: actionTypes.DICTIONARY_SET_WORDS, words
  } as const),
};
