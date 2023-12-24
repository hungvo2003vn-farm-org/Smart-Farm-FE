import { API } from "../base";

export interface User {
  address: string;
  email: string;
  id: number;
  name: string;
  username: string;
}


const userApi = API.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query<User, string>({
      query: (id) => `users/${id}`,
    }),
  }),
  overrideExisting: true,
});


export const { useLazyGetUserQuery } = userApi;