import { userType } from './../Types/Types';
// import { usersAPI } from '../API/api';
import { updateObjectInArray } from '../utils/object-helpers';
import { BaseThunkType, InferActionsTypes } from './redux-store';
import { Dispatch } from 'redux';
import { usersAPI } from '../API/users-api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';
const SET_FILTER = 'SET_FILTER';

const initialState = {
  users: [] as Array<userType>,
  pageSize: 100,
  currentPage: 1,
  totalUsersCount: 0,
  isFetching: false,
  followingInProgress: [] as Array<number>, // Array of userId
  filter: { term: '' },
  // fake: 10,
};

const usersReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  switch (action.type) {
    // case 'fake':
    //   return { ...state, fake: state.fake + 1 };

    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, 'id', action.userId, {
          followed: true,
        }),
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
        users: updateObjectInArray(state.users, 'id', action.userId, {
          followed: false,
        }),
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

    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

export const actions = {
  followSuccess: (userId: number) => {
    return { type: FOLLOW, userId } as const;
  },

  unfollowSuccess: (userId: number) => {
    return { type: UNFOLLOW, userId } as const;
  },

  setUsers: (users: Array<userType>) => {
    return { type: SET_USERS, users } as const;
  },

  setCurrentPage: (pageNumber: number) =>
    ({
      type: SET_CURRENT_PAGE,
      pageNumber,
    } as const),

  setTotalUsersCount: (totalUsersCount: number) =>
    ({
      type: SET_TOTAL_USERS_COUNT,
      totalUsersCount,
    } as const),

  toggleIsFetching: (isFetching: boolean) =>
    ({
      type: TOGGLE_IS_FETCHING,
      isFetching,
    } as const),

  toggleFollowingProgress: (isFetching: boolean, userId: number) =>
    ({
      type: TOGGLE_FOLLOWING_PROGRESS,
      isFetching,
      userId,
    } as const),

  setFilter: (term: string) =>
    ({ type: SET_FILTER, payload: { term } } as const),
};

// type GetStateType = () => AppStateType;
type DispatchType = Dispatch<ActionsTypes>;
// type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown,ActionsTypes>;

export const requestUsers = (
  currentPage: number,
  pageSize: number,
  term: string
): ThunkType => {
  // return async (dispatch: DispatchType, getState: GetStateType) => {
  return async (dispatch, getState) => {
    dispatch(actions.toggleIsFetching(true));
    const res = await usersAPI.getUsersData(currentPage, pageSize);
    dispatch(actions.toggleIsFetching(false));
    dispatch(actions.setTotalUsersCount(res.totalCount));
    dispatch(actions.setCurrentPage(currentPage));
    dispatch(actions.setUsers(res.items));
  };
};

const _followUnfollowFlow = async (
  dispatch: DispatchType,
  userId: number,
  apiMethod: any,
  actionCreator: (userId: number) => ActionsTypes
) => {
  dispatch(actions.toggleFollowingProgress(true, userId));
  const res = await apiMethod(userId);
  if (res.resultCode === 0) dispatch(actionCreator(userId));
  dispatch(actions.toggleFollowingProgress(false, userId));
};

export const follow = (userId: number): ThunkType => {
  const apiMethod = usersAPI.follow.bind(usersAPI);

  return async (dispatch) => {
    await _followUnfollowFlow(
      dispatch,
      userId,
      apiMethod,
      actions.followSuccess
    );
  };
};

export const unfollow = (userId: number): ThunkType => {
  const apiMethod = usersAPI.unfollow.bind(usersAPI);

  return async (dispatch) => {
    await _followUnfollowFlow(
      dispatch,
      userId,
      apiMethod,
      actions.unfollowSuccess
    );
  };
};

export default usersReducer;

type initialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsTypes>;

// type ActionsTypes = followSuccessActionType | unfollowSuccessActionType | setUsersActionType | setCurrentPageActionType | setTotalUsersCountActionType | toggleIsFetchingActionType | toggleFollowingProgressActionType;

// type followSuccessActionType = {
//   type: typeof FOLLOW
//   userId: number
// }

// type unfollowSuccessActionType = {
//   type: typeof UNFOLLOW
//   userId: number
// }

// type setUsersActionType = {
//   type: typeof SET_USERS
//   users: Array<userType>
// }

// type setCurrentPageActionType = {
//   type: typeof SET_CURRENT_PAGE
//   pageNumber: number
// }

// type setTotalUsersCountActionType = {
//   type: typeof SET_TOTAL_USERS_COUNT
//   totalUsersCount: number
// }

// type toggleIsFetchingActionType = {
//   type: typeof TOGGLE_IS_FETCHING
//   isFetching: boolean
// }

// type toggleFollowingProgressActionType = {
//   type: typeof TOGGLE_FOLLOWING_PROGRESS
//   isFetching: boolean
//   userId: number
// }
