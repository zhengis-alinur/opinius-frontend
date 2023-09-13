import { User } from '../types';
import { UserStats } from '../types/UserStats';
import { rootApi } from './rootApi';

type SetAvatarRequestType = {
    id: number;
    imageUrl: string;
};

type SetAvatarResponseType = {
    data: User;
};

const userApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query<User, number>({
            query: (id) => ({
                url: `/user/?id=${id}`,
            }),
            providesTags: ['User'],
        }),
        setAvatar: builder.mutation<SetAvatarResponseType, SetAvatarRequestType>({
            query: (body) => ({
                url: `/user/setAvatar`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['User'],
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

export const { useGetUserQuery, useGetUserStatsQuery, useSetAvatarMutation } = userApi;
