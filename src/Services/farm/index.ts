import { API } from "../base";

export interface Farm {
  id: number;
  name: string;
  source: string;
  desc: string;
}


const farmlistApi = API.injectEndpoints({
  endpoints: (build) => ({
    getFarmList: build.query<Farm[], string>({
      query: (id) => `farm/user/${id}`,
    }),
  }),
  overrideExisting: true,
});


export const { useLazyGetFarmListQuery } = farmlistApi;