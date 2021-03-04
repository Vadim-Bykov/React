import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { getAuthUserData } from './auth-reducer';
import { AppStateType } from './redux-store';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

type initialStateType = {
  initialized: boolean,
}

const initialState: initialStateType = {
  initialized: false,
  // globalError: null
};

type ActionsAppTypes = InitializedSuccessActionType;

const appReducer = (state = initialState, action: ActionsAppTypes): initialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

type InitializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS
}

export const setInitializedSuccess = (): InitializedSuccessActionType => {
  return { type: INITIALIZED_SUCCESS };
};

// type DispatchType = Dispatch<ActionsAppTypes>;
// type GetStateType = () => AppStateType;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsAppTypes>;

export const initializeApp = (): ThunkType => {
  return async (dispatch) => {
    await dispatch(getAuthUserData());
    dispatch(setInitializedSuccess());
  };
};

export default appReducer;
