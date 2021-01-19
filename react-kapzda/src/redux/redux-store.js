import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

const store = createStore(reducers);

window.store = store;

export default store;
