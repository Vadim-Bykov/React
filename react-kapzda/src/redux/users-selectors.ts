// import {createSelector} from 'reselect'

import { AppStateType } from "./redux-store";

// const getUsersSelector = (state: AppStateType) => {
//    return state.usersPage.users;
// }

// const getUsersSelector2 = (state: AppStateType) => {
//    return state.auth.isAuth;
// }

// export const getUsers = createSelector(getUsersSelector, getUsersSelector2, (users, isAuth) => {
//    return users.map(u=>u)
// })

export const getUsers = (state: AppStateType) => {
  // console.log('Reselect');
  return state.usersPage.users;
};

export const getPageSize = (state: AppStateType) => {
  return state.usersPage.pageSize;
};

export const getCurrentPage = (state: AppStateType) => {
  return state.usersPage.currentPage;
};

export const getTotalUsersCount = (state: AppStateType) => {
  return state.usersPage.totalUsersCount;
};

export const getIsFetching = (state: AppStateType) => {
  return state.usersPage.isFetching;
};

export const getFollowingInProgress = (state: AppStateType) => {
  return state.usersPage.followingInProgress;
};
