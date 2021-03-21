import { BaseThunkType, InferActionsTypes } from './../../../redux/redux-store';
import { actions } from './actions';
import { initialState } from './state';


export const authData = { email: 'bvntaev@gmail.com', password: '20272027' };

export type TInitialState = typeof initialState;

export type TAuthData = { email: string; password: string };

export type TUserData = { id: string; email: string; };

export type TWord = {
  id: string;
  group: number;
  page: number;
  word: string;
  image: string;
  audio: string;
  audioMeaning: string;
  audioExample: string;
  textMeaning: string;
  textExample: string;
  transcription: string;
  textExampleTranslate: string;
  textMeaningTranslate: string;
  wordTranslate: string;
};

export type TActions = InferActionsTypes<typeof actions>;

export type TThunk = BaseThunkType<TActions>;
