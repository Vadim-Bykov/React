import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'a22ee90a-a97a-49d2-a11e-57e1c21f80c5',
  },
});

export const usersAPI = {
  unfollow(id) {
    return instance.delete(`follow/${id}`).then((res) => res.data);
  },

  follow(id) {
    return instance.post(`follow/${id}`).then((res) => res.data);
  },

  getUsersData(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((res) => res.data);
  },

  getDataChangedPage(pageNumber, pageSize) {
    return instance
      .get(`users?page=${pageNumber}&count=${pageSize}`)
      .then((res) => res.data);
  },
};

export const profileAPI = {
  getProfileData(userId) {
    return instance.get(`profile/${userId}`);
  },

  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },

  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },
};

export const authAPI = {
  getAuthData() {
    return instance.get(`auth/me`);
  },
};
