import { InferActionsTypes } from './redux-store';

const ADD_MESSAGE = 'ADD-MESSAGE';

type dialogType = {
  id: number;
  name: string;
};

type messageType = {
  id: number;
  message: string;
};

const initialState = {
  dialogs: [
    { id: 1, name: 'Vadim' },
    { id: 2, name: 'Tanya' },
    { id: 3, name: 'Eva' },
    { id: 4, name: 'Slavik' },
  ] as Array<dialogType>,
  messages: [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Hi!' },
    { id: 4, message: 'Yoo' },
  ] as Array<messageType>,
  messageText: null as null | string,
};

const dialogReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: state.messages.length + 1,
            message: action.newMessage,
          },
        ],
        messageText: '',
      };

    default:
      return state;
  }
};

export const actions = {
  addMessageActionCreator: (newMessage: string) => {
    return { type: ADD_MESSAGE, newMessage } as const;
  },
};

export default dialogReducer;

export type InitialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;

// type addMessageActionCreatorType = {
//   type: typeof ADD_MESSAGE
//   newMessage: string
// }

// export const addMessageActionCreator = (newMessage: string): addMessageActionCreatorType => {
//   return { type: ADD_MESSAGE, newMessage };
// };
