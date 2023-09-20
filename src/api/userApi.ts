import { Review, User } from '../types';
import { UserStats } from '../types/UserStats';
import { rootApi } from './rootApi';

type SetAvatarRequestType = {
    id: number;
    imageUrl: string;
};

type SetAvatarResponseType = {
    data: User;
};

type GetFavoritesResponseType = {
    review: Review;
}[];

const userApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query<User, number | string>({
            query: (id) => ({
                url: `/user/?id=${id}`,
            }),
            providesTags: ['User'],
        }),
        getUsers: builder.query<User[], void>({
            query: () => ({
                url: `/user/getAll`,
            }),
        }),
        deleteUsers: builder.mutation<void, { ids: number[] }>({
            query: (body) => ({
                url: `/user/delete`,
                method: 'POST',
                body,
            }),
        }),
        blockUsers: builder.mutation<void, { ids: number[] }>({
            query: (body) => ({
                url: `/user/block`,
                method: 'POST',
                body,
            }),
        }),
        setAdmin: builder.mutation<void, { ids: number[] }>({
            query: (body) => ({
                url: `/user/setAdmin`,
                method: 'POST',
                body,
            }),
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
        }),
        getUserReviews: builder.query<Review[], number>({
            query: (id) => ({
                url: `/user/reviews/?id=${id}`,
                providesTags: ['User'],
            }),
        }),
        getUserFavorites: builder.query<GetFavoritesResponseType, number>({
            query: (id) => ({
                url: `/user/favorites/?id=${id}`,
                providesTags: ['User'],
            }),
        }),
    }),
    overrideExisting: false,
});

export const {
    useGetUserQuery,
    useGetUserStatsQuery,
    useSetAvatarMutation,
    useGetUserFavoritesQuery,
    useDeleteUsersMutation,
    useGetUserReviewsQuery,
    useGetUsersQuery,
    useBlockUsersMutation,
    useSetAdminMutation,
} = userApi;
