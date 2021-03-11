import { photosType, profileType } from '../Types/Types';
import { instance, ResponseType } from './api';


type SavePhotoType = {
   photos: photosType ;
};

export const profileAPI = {
  getProfileData(userId: number) {
    return instance.get<profileType>(`profile/${userId}`)
      .then(res => res.data);
  },

  getStatus(userId: number) {
    return instance.get<string>(`profile/status/${userId}`)
      .then(res => res.data);
  },

  updateStatus(status: string) {
    return instance.put<ResponseType>(`profile/status`, {
      status: status,
    });
  },

  savePhoto(file: File) {
    const formData = new FormData();
    formData.append('image', file);

    return instance
      .put<ResponseType<SavePhotoType>>(`profile/photo`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => res.data);
  },

  saveProfile(profile: profileType) {
    return instance.put<ResponseType>(`profile`, profile);
  },
};
