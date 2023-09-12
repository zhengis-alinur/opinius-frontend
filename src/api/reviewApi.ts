import { Review, User } from '../types';
import { CreateReview } from '../types/Review';
import { rootApi } from './rootApi';

type CreateReviewResponse = {
    message: string;
    review: Review;
};

type GetReviewByIdResponse = {
    review: Review;
    user: User;
};

const reviewApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        getReviews: builder.query<Review[], void>({
            query: () => ({
                url: '/review/getAll',
            }),
            providesTags: ['Reviews'],
        }),
        getReviewById: builder.query<GetReviewByIdResponse, string>({
            query: (id: string) => ({
                url: `/review/?id=${id}`,
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

export const { useGetReviewsQuery, useCreateReviewMutation, useGetReviewByIdQuery } =
    reviewApi;
