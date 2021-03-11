// import { initialStateType } from './profile-reducer';
import { ThunkAction } from 'redux-thunk';
import { getAuthUserData } from './auth-reducer';
import { AppStateType, InferActionsTypes } from './redux-store';

const APP_INITIALIZED_SUCCESS = 'APP_INITIALIZED_SUCCESS';

// type InitialStateType = {
//   initialized: boolean;
// };

const initialState = {
  initialized: false,
};

type InitialStateType = typeof initialState;

const appReducer = (
  state = initialState,
  action: ActionsAppTypes
): InitialStateType => {
  switch (action.type) {
    case APP_INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

export type ActionsAppTypes = InferActionsTypes<typeof actions>;

export const actions = {
  setInitializedSuccess: () => ({ type: APP_INITIALIZED_SUCCESS }),
};

// type DispatchType = Dispatch<ActionsAppTypes>;
// type GetStateType = () => AppStateType;
type ThunkType = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  ActionsAppTypes
>;

export const initializeApp = (): ThunkType => {
  return async (dispatch) => {
    await dispatch(getAuthUserData());
    dispatch(actions.setInitializedSuccess());
  };
};

export default appReducer;
