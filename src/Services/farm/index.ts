import { Image } from 'react-native';
import { API } from "../base";

export interface Farm {
    id: number;
    name: string;
    model: string;
    timeOn: string;
}

export interface addFarmRequest {
    name: string;
    address: string;
    description: string;
    image: string;
    cultivarId: string;
    modelID: string;
    userId: string;
    modelId: string;
}

const farmApi = API.injectEndpoints({
    endpoints: (build) => ({
        getFarmList: build.query<Farm[], void>(
            {
                query: () => 'farms',
            }
        ),
        getFarm: build.query({
            query: (id) => `farms/${id}/`,
        }),
        createFarm: build.mutation<Farm, addFarmRequest>({
            query: (body) => ({
                url: 'farms',
                method: 'POST',
                body,
            }),
        }),
        deleteFarm: build.mutation({
            query: (id) => ({
                url: `farms/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
    overrideExisting: true,
});


export const { useGetFarmListQuery,useLazyGetFarmListQuery, useLazyGetFarmQuery, useCreateFarmMutation, useDeleteFarmMutation } = farmApi;