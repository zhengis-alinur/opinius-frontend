import { Review } from '../types';
import { CreateReview } from '../types/Review';
import { rootApi } from './rootApi';

type CreateReviewResponse = {
    message: string;
    review: Review;
};
const reviewApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        getReviews: builder.query<Review[], void>({
            query: () => ({
                url: '/review/getAll',
            }),
            providesTags: ['Reviews'],
        }),
        createReview: builder.mutation<CreateReviewResponse, CreateReview>({
            query: (review) => ({
                url: '/review/create',
                method: 'POST',
                body: review,
            }),
            invalidatesTags: ['Reviews'],
        }),
    }),
    overrideExisting: false,
});

export const { useGetReviewsQuery, useCreateReviewMutation } = reviewApi;
