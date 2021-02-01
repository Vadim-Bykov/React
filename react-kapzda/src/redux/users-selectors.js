// import {createSelector} from 'reselect'

// const getUsersSelector = (state) => {
//    return state.usersPage.users;
// }

// const getUsersSelector2 = (state) => {
//    return state.auth.isAuth;
// }

// export const getUsers = createSelector(getUsersSelector, getUsersSelector2, (users, isAuth) => {
//    return users.map(u=>u)
// })

export const getUsers = (state) => {
  return state.usersPage.users;
};
 
export const getPageSize = (state) => {
  return state.usersPage.pageSize;
};

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};

export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount;
};

export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
};

export const getFollowingInProgress = (state) => {
  return state.usersPage.followingInProgress;
};
