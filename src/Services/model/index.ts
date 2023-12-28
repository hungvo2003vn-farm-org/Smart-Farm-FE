import { API } from "../base";

export interface Model {
  id: number;
  name: string;
  source: string;
  desc: string;
}


const modelApi = API.injectEndpoints({
  endpoints: (build) => ({
    getModel: build.query({
      query: () => `model`,
    }),
  }),
  overrideExisting: true,
});


export const { useLazyGetModelQuery } = modelApi;