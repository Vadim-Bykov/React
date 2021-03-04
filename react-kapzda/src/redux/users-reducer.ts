import { userType } from './../Types/Types';
import { usersAPI } from '../API/api';
import { updateObjectInArray } from '../utils/object-helpers';
import { AppStateType } from './redux-store';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';


const initialState = {
  users: [] as Array<userType>,
  pageSize: 100,
  currentPage: 1,
  totalUsersCount: 0,
  isFetching: false,
  followingInProgress: [] as Array<number>, // Array of userId
  // fake: 10,
};

type initialStateType = typeof initialState;

const usersReducer = (state = initialState, action: ActionsTypes): initialStateType => {
  switch (action.type) {
    // case 'fake':
    //   return { ...state, fake: state.fake + 1 };

    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, 'id', action.userId, { followed: true })
        // users: state.users.map((user) => {
        //   if (user.id === action.userId) {
        //     return { ...user, followed: true };
        //   }
        //   return user;
        // }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, 'id', action.userId, { followed: false })
        // users: state.users.map((user) => {
        //   if (user.id === action.userId) {
        //     return { ...user, followed: false };
        //   }
        //   return user;
        // }),
      };

    case SET_USERS:
      return { ...state, users: [...action.users] };

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.pageNumber };

    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalUsersCount };

    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };

    case TOGGLE_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };

    default:
      return state;
  }
};

type ActionsTypes = followSuccessActionType | unfollowSuccessActionType | setUsersActionType | setCurrentPageActionType | setTotalUsersCountActionType | toggleIsFetchingActionType | toggleFollowingProgressActionType;

type followSuccessActionType = {
  type: typeof FOLLOW
  userId: number
}

export const followSuccess = (userId: number): followSuccessActionType => {
  return { type: FOLLOW, userId };
};

type unfollowSuccessActionType = {
  type: typeof UNFOLLOW
  userId: number
}

export const unfollowSuccess = (userId: number): unfollowSuccessActionType => {
  return { type: UNFOLLOW, userId };
};

type setUsersActionType = {
  type: typeof SET_USERS
  users: Array<userType>
}

export const setUsers = (users: Array<userType>): setUsersActionType => {
  return { type: SET_USERS, users };
};

type setCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE
  pageNumber: number
}

export const setCurrentPage = (pageNumber: number): setCurrentPageActionType => ({
  type: SET_CURRENT_PAGE,
  pageNumber,
});

type setTotalUsersCountActionType = {
  type: typeof SET_TOTAL_USERS_COUNT
  totalUsersCount: number
}

export const setTotalUsersCount = (totalUsersCount: number): setTotalUsersCountActionType => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});

type toggleIsFetchingActionType = {
  type: typeof TOGGLE_IS_FETCHING
  isFetching: boolean
}

export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingActionType => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

type toggleFollowingProgressActionType = {
  type: typeof TOGGLE_FOLLOWING_PROGRESS
  isFetching: boolean
  userId: number
}

export const toggleFollowingProgress = (isFetching: boolean, userId: number): toggleFollowingProgressActionType => ({
  type: TOGGLE_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

type GetStateType = () => AppStateType;
type DispatchType = Dispatch<ActionsTypes>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

export const requestUsers = (currentPage: number, pageSize: number): ThunkType => {
  // return async (dispatch: DispatchType, getState: GetStateType) => {
  return async (dispatch, getState) => {
    dispatch(toggleIsFetching(true));
    const res = await usersAPI.getUsersData(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setTotalUsersCount(res.totalCount));
    dispatch(setCurrentPage(currentPage));
    dispatch(setUsers(res.items));
  };
};

const _followUnfollowFlow = async (
  dispatch: DispatchType,
  userId: number,
  apiMethod: any,
  actionCreator: (userId: number) => followSuccessActionType | unfollowSuccessActionType
) => {
  dispatch(toggleFollowingProgress(true, userId));
  const res = await apiMethod(userId);
  if (res.resultCode === 0) dispatch(actionCreator(userId));
  dispatch(toggleFollowingProgress(false, userId));
};

export const follow = (userId: number): ThunkType => {
  const apiMethod = usersAPI.follow.bind(usersAPI);

  return async (dispatch) => {
    await _followUnfollowFlow(dispatch, userId, apiMethod, followSuccess);
  };
};

export const unfollow = (userId: number): ThunkType => {
  const apiMethod = usersAPI.unfollow.bind(usersAPI);

  return async (dispatch) => {
    await _followUnfollowFlow(dispatch, userId, apiMethod, unfollowSuccess);
  };
};

export default usersReducer;
