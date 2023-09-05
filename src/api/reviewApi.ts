import { Review } from '../types';
import { rootApi } from './rootApi';

const reviewApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        getReviews: builder.query<Review[], void>({
            query: () => ({
                url: '/review/getAll',
            }),
            providesTags: ['Reviews'],
        }),
    }),
    overrideExisting: false,
});

export const { useGetReviewsQuery } = reviewApi;
