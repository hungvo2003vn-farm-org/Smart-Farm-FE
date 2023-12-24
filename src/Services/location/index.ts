import { API } from "../base";

export interface FarmLocation {
  id: number;
  name: string;
}


const locationApi = API.injectEndpoints({
  endpoints: (build) => ({
    getLocation: build.query<FarmLocation, string>({
      query: () => `location`,
    }),
  }),
  overrideExisting: true,
});


export const { useLazyGetLocationQuery } = locationApi;