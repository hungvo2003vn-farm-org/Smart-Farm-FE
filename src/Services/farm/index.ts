import { API } from "../base";

export interface Farm {
  id: number;
  name: string;
  model: string;
  timeOn: string;
}

export interface Farm {
  id: number;
  name: string;
  model: string;
  timeOn: string;
}


const farmApi = API.injectEndpoints({
  endpoints: (build) => ({
    getFarmList: build.query({
      query: (id) => `farm/user/${id}`,
    }),
    getFarm: build.query({
      query: (id) => `farm/${id}/`,
    }),
    createFarm: build.mutation({
      query: ({name, location, plant, acraege}) => ({
        url: 'farm',
        method: 'POST',
        body: { name, location, plant, acraege},
      }),
    }),
    deleteFarm: build.mutation({
      query: (id) => ({
        url: `farm/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
  overrideExisting: true,
});


export const { useLazyGetFarmListQuery, useLazyGetFarmQuery, useCreateFarmMutation, useDeleteFarmMutation  } = farmApi;