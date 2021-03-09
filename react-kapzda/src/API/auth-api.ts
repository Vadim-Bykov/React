import { instance, ResultCodeCaptcha, ResultCodeEnum, ResponseType } from "./api";

type MeResponseDataType = {
  id: number;
  email: string;
  login: string;
};

type LoginResponseDataType = {
    userId: number;
};


type GetCaptchaType = {
  url: string
}

export const authAPI = {
  me() {
    return instance.get<ResponseType<MeResponseDataType>>(`auth/me`).then((res) => res.data);
  },

  login(
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string | null = null
  ) {
    return instance
      .post<ResponseType<LoginResponseDataType, ResultCodeEnum | ResultCodeCaptcha>>(`auth/login`, {
        email,
        password,
        rememberMe,
        captcha,
      })
      .then((res) => res.data);
  },

  logout() {
    return instance.delete(`auth/login`);
  },

  getCaptcha() {
    return instance.get<GetCaptchaType>(`security/get-captcha-url`)
      .then(res => res.data);
  },
};
