import AsyncStorage from "@react-native-async-storage/async-storage";
import { API } from "../base";

export interface User {
  id: number;
  email: string;
  name: string;
}

const userApi = API.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) =>  `users/${id}`,
    }),
    updateUser: build.mutation({
      query: ({id, body}) => ({
        url: `users/${id}`,
        method: 'PATCH',
        body,
      }),
    })
  }),
  overrideExisting: true,
});


export const { useLazyGetUserQuery, useUpdateUserMutation } = userApi;