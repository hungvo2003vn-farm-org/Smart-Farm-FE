import { API } from "../base";

export interface Schedule {
  id: number;
  timeOn: string;
  duration: string;
  amount: string;
}


const scheduleApi = API.injectEndpoints({
  endpoints: (build) => ({
    getScheduleList: build.query({
      query: (id) => `schedule/user/${id}`,
    }),
    createSchedule:  build.mutation({
      query: (body) => ({
          url: 'scenarios',
          method: 'POST',
          body,
      }),
  }),
    deleteSchedule: build.mutation({
      query: (id) => ({
        url: `scenarios/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
  overrideExisting: true,
});


export const { useLazyGetScheduleListQuery, useCreateScheduleMutation, useDeleteScheduleMutation } = scheduleApi;