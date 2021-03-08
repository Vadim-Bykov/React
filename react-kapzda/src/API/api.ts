import axios from 'axios';
import { photosType, profileType } from '../Types/Types';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'a22ee90a-a97a-49d2-a11e-57e1c21f80c5',
  },
});

export enum ResultCodeEnum {
  Success = 0,
  Error = 1,
}

export enum ResultCodeCaptcha {
  CaptchaIsRequired = 10,
}

export const usersAPI = {
  unfollow(id: number) {
    return instance.delete(`follow/${id}`).then((res) => res.data);
  },

  follow(id: number) {
    return instance.post(`follow/${id}`).then((res) => res.data);
  },

  getUsersData(currentPage: number, pageSize: number) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((res) => res.data);
  },

  getDataChangedPage(pageNumber: number, pageSize: number) {
    return instance
      .get(`users?page=${pageNumber}&count=${pageSize}`)
      .then((res) => res.data);
  },
};

type UpdateStatusAndProfileType = {
  resultCode: ResultCodeEnum;
  messages: Array<string>;
  data: any;
};

type SavePhotoType = {
  data: { photos: photosType };
  resultCode: ResultCodeEnum;
  messages: Array<string>;
};

export const profileAPI = {
  getProfileData(userId: number) {
    return instance.get<profileType>(`profile/${userId}`);
  },

  getStatus(userId: number) {
    return instance.get<string>(`profile/status/${userId}`);
  },

  updateStatus(status: string) {
    return instance.put<UpdateStatusAndProfileType>(`profile/status`, {
      status: status,
    });
  },

  savePhoto(file: any) {
    const formData = new FormData();
    formData.append('image', file);

    return instance
      .put<SavePhotoType>(`profile/photo`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => res.data);
  },

  saveProfile(profile: profileType) {
    return instance.put<UpdateStatusAndProfileType>(`profile`, profile);
  },
};

type MeResponseType = {
  data: {
    id: number;
    email: string;
    login: string;
  };
  resultCode: ResultCodeEnum;
  messages: Array<string>;
};

type LoginResponseType = {
  data: {
    userId: number;
  };
  resultCode: ResultCodeEnum | ResultCodeCaptcha;
  messages: Array<string>;
};

type LogoutType = {
  resultCode: number
  messages: Array<string>
  data: {}
};

type GetCaptchaType = {
  url: string
}

export const authAPI = {
  me() {
    return instance.get<MeResponseType>(`auth/me`).then((res) => res.data);
  },

  login(
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string | null = null
  ) {
    return instance
      .post<LoginResponseType>(`auth/login`, {
        email,
        password,
        rememberMe,
        captcha,
      })
      .then((res) => res.data);
  },

  logout() {
    return instance.delete<LogoutType>(`auth/login`);
  },

  getCaptcha() {
    return instance.get<GetCaptchaType>(`security/get-captcha-url`);
  },
};
