import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'f7ade959-9630-45ee-bac8-2c375e581ad5',
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
      .get(
        `users?page=${pageNumber}&count=${pageSize}`
      )
      .then((res) => res.data);
  },
};
