import * as types from './types';

export const initialState = {
  isAuth: true,
  isToken: false,
  userData: {} as types.TUserData,
  token: '',
  words: [] as Array<types.TWord>,
};
