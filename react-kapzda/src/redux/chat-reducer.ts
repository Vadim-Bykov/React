import { chatApi, ChatMessageType } from './../API/chat-api';
import { FormAction, stopSubmit } from 'redux-form';
import { BaseThunkType, InferActionsTypes } from './redux-store';
import { Dispatch } from 'redux';

const SET_CHAT_MESSAGES = 'SET_CHAT_MESSAGES';

const initialState = {
  messages: [] as ChatMessageType[],
};

const chatReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  switch (action.type) {
    case SET_CHAT_MESSAGES:
      return {
        ...state,
        messages: [...state.messages, ...action.payload.messages],
      };

    default:
      return state;
  }
};

export const actions = {
  setMessages: (messages: ChatMessageType[]) => ({
    type: SET_CHAT_MESSAGES,
    payload: { messages },
  }),
};

let newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null;

const newMessageHandlerCreator = (dispatch: Dispatch) => {
  if (newMessageHandler === null) {
    newMessageHandler = (messages: ChatMessageType[]) => {
      dispatch(actions.setMessages(messages));
    };
  }
  return newMessageHandler;
};

export const startMessagesListening = (): ThunkType => async (dispatch) => {
  chatApi.startChannel();
  chatApi.subscribe(newMessageHandlerCreator(dispatch));
};

export const stopMessageListening = (): ThunkType => async (dispatch) => {
  chatApi.unsubscribe(newMessageHandlerCreator(dispatch));
};

export const sendMessage =
  (message: string): ThunkType =>
  async (dispatch) => {
    chatApi.sendMessage(message);
  };

export default chatReducer;

export type initialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsTypes | FormAction>;

// type DispatchType = Dispatch<ActionsTypes>
// type GetStateType = () => AppStateType;
// type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>
