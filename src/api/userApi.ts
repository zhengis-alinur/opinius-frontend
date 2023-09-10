import { User } from '../types';
import { UserStats } from '../types/UserStats';
import { rootApi } from './rootApi';

const userApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query<User, number>({
            query: (id) => ({
                url: `/user/?id=${id}`,
            }),
            providesTags: ['User'],
        }),
        getUserStats: builder.query<UserStats, number>({
            query: (id) => ({
                url: `/user/stats/?id=${id}`,
            }),
            providesTags: ['User'],
        }),
    }),
    overrideExisting: false,
});

export const { useGetUserQuery, useGetUserStatsQuery } = userApi;
