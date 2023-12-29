import { API } from "../base";

export interface User {
  id: number;
  email: string;
  name: string;
}


const userApi = API.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `users/${id}`,
    }),
    updateUser: build.mutation({
      query: ({id,name, email}) => ({
        url: `users/${id}`,
        method: 'POST',
        body: { name, email},
      }),
    })
  }),
  overrideExisting: true,
});


export const { useLazyGetUserQuery, useUpdateUserMutation } = userApi;