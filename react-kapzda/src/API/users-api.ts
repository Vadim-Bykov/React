import { GetUsersItemsType, instance, ResponseType } from "./api";


export const usersAPI = {
  unfollow(id: number) {
    return instance.delete(`follow/${id}`).then((res) => res.data) as Promise<ResponseType>;
  },

  follow(id: number) {
    return instance.post<ResponseType>(`follow/${id}`).then((res) => res.data);
  },

  getUsersData(currentPage: number, pageSize: number, term = '', friend: null | boolean = null) {
    return instance
      .get<GetUsersItemsType>(`users?page=${currentPage}&count=${pageSize}&term=${term}${friend === null ? '' : `&friend=${friend}`}`)
      .then((res) => res.data);
  },

  getDataChangedPage(pageNumber: number, pageSize: number) {
    return instance
      .get<GetUsersItemsType>(`users?page=${pageNumber}&count=${pageSize}`)
      .then((res) => res.data);
  },
};

