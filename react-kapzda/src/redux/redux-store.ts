import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import profileReducer from './profile-reducer';
import dialogReducer from './dialog-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from './app-reducer';

const rootReducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

type RootReducersType = typeof rootReducers; // AAPSTATE
export type AppStateType = ReturnType<RootReducersType>

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionsTypes<T extends { [key: string]: (...args: any) => any }> = ReturnType<PropertiesTypes<T>>;


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

// const store = createStore(reducers, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store;

export default store;
