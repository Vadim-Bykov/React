import { FormAction, stopSubmit } from 'redux-form';
import { profileAPI } from '../API/profile-api';
// import { profileAPI } from '../API/api';
import { photosType, postType, profileType } from '../Types/Types';
import { BaseThunkType, InferActionsTypes } from './redux-store';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

const initialState = {
  posts: [
    { id: 1, message: 'Hello', likesCount: 11 },
    { id: 2, message: 'How are you?', likesCount: 12 },
    { id: 3, message: 'Hi!', likesCount: 13 },
    { id: 4, message: 'Yoo', likesCount: 14 },
  ] as Array<postType>,
  profile: null as profileType | null,
  status: '',
  postText: '',
};

const profileReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: state.posts.length + 1,
            message: action.newPost,
            likesCount: 0,
          },
        ],
        postText: '',
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.postId),
      };

    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photo } as profileType,
      };

    default:
      return state;
  }
};

export const actions = {
  addPostActionCreator: (newPost: string) => {
    return { type: ADD_POST, newPost } as const;
  },

  setUserProfile: (profile: profileType) => {
    return { type: SET_USER_PROFILE, profile } as const;
  },

  setStatus: (status: string) => {
    return { type: SET_STATUS, status } as const;
  },

  deletePost: (postId: number) => {
    return { type: DELETE_POST, postId } as const;
  },

  savePhotoSuccess: (photo: photosType) => {
    return { type: SAVE_PHOTO_SUCCESS, photo } as const;
  },
};

export const getUserProfileInfo = (userId: number): ThunkType => {
  return async (dispatch, getState) => {
    const res = await profileAPI.getProfileData(userId);
    dispatch(actions.setUserProfile(res));
  };
};

export const getUserStatus = (userId: number): ThunkType => {
  return async (dispatch) => {
    const res = await profileAPI.getStatus(userId);
    dispatch(actions.setStatus(res));
  };
};

export const updateUserStatus = (status: string): ThunkType => {
  return async (dispatch) => {
    try {
      const res = await profileAPI.updateStatus(status);
      if (res.data.resultCode === 0) dispatch(actions.setStatus(status));
    } catch (error) {
      alert(error);
    }
  };
};

export const savePhoto = (photo: File): ThunkType => {
  return async (dispatch) => {
    const res = await profileAPI.savePhoto(photo);
    if (res.resultCode === 0)
      dispatch(actions.savePhotoSuccess(res.data.photos));
  };
};

export const saveProfile = (profile: profileType): ThunkType => {
  return async (dispatch, getState) => {
    const userId = getState().auth.id;
    const res = await profileAPI.saveProfile(profile);
    if (res.data.resultCode === 0) {
      if (userId !== null) dispatch(getUserProfileInfo(userId));
    } else {
      dispatch(stopSubmit('edit-profile', { _error: res.data.messages[0] }));

      return Promise.reject();
      // dispatch(stopSubmit('edit-profile', {'contacts':{facebook: res.data.messages[0]}}));
    }
  };
};

export default profileReducer;

export type InitialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsTypes | FormAction>;

// type ActionsTypes = addPostActionCreatorActionType | setUserProfileActionType | setStatusActionType | deletePostActionType | savePhotoSuccessActionType;

// type addPostActionCreatorActionType = {
//   type: typeof ADD_POST
//   newPost: string
// }

// export const addPostActionCreator = (newPost: string): addPostActionCreatorActionType => {
//   return { type: ADD_POST, newPost };
// };

// type setUserProfileActionType = {
//   type: typeof SET_USER_PROFILE
//   profile: profileType
// }

// const setUserProfile = (profile: profileType): setUserProfileActionType => {
//   return { type: SET_USER_PROFILE, profile };
// };

// type setStatusActionType = {
//   type: typeof SET_STATUS
//   status: string
// }

// export const setStatus = (status: string): setStatusActionType => {
//   return { type: SET_STATUS, status };
// };

// type deletePostActionType = {
//   type: typeof DELETE_POST
//   postId: number
// }

// export const deletePost = (postId: number): deletePostActionType => {
//   return { type: DELETE_POST, postId };
// };

// type savePhotoSuccessActionType = {
//   type: typeof SAVE_PHOTO_SUCCESS
//   photo: photosType
// }

// export const savePhotoSuccess = (photo:photosType): savePhotoSuccessActionType => {
//   return { type: SAVE_PHOTO_SUCCESS, photo };
// };

// type DispatchType = Dispatch<ActionsTypes>;
// type GetStateType = () => AppStateType;
// export type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>;
