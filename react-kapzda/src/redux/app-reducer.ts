import { getAuthUserData } from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

type initialStateType = {
  initialized: boolean,
}

const initialState: initialStateType = {
  initialized: false,
  // globalError: null
};

const appReducer = (state = initialState, action: any): initialStateType => {
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

export const initializeApp = () => {
  return async (dispatch: any) => {
    await dispatch(getAuthUserData());
    dispatch(setInitializedSuccess());
  };
};

export default appReducer;
