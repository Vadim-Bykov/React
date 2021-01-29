import { getAuthUserData } from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
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

export const setInitializedSuccess = () => {
  return { type: INITIALIZED_SUCCESS };
};

export const initializeApp = () => {
  return (dispatch) => {
    const promise = dispatch(getAuthUserData());
    promise.then(() => dispatch(setInitializedSuccess()));
  };
};

export default appReducer;
