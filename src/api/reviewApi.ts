import { Review, User } from '../types';
import { CreateReview, UpdateReview } from '../types/Review';
import { rootApi } from './rootApi';

type CreateReviewResponse = {
    message: string;
    review: Review;
};

type GetReviewByIdResponse = {
    review: Review;
    user: User;
};

type RatingOfReviewByIdResponse = {
    rating: number;
    rated: boolean;
};

type CommentReviewRequest = {
    reviewId: number;
    comment: string;
};

type RateReviewRequest = {
    reviewId: number;
    rating: number;
};

type RateReviewResponse = { rated: boolean; rating: number };

type LikeReviewRequest = {
    reviewId: string;
};

const reviewApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        getReviews: builder.query<Review[], void>({
            query: () => ({
                url: '/review/getAll',
            }),
            providesTags: ['Reviews'],
        }),
        getBestReviews: builder.query<Review[], void>({
            query: () => ({
                url: '/review/best',
            }),
            providesTags: ['Reviews'],
        }),
        search: builder.query<Review[], string>({
            query: (keyword) => ({
                url: '/review/getAll',
                params: {
                    keyword,
                },
            }),
            providesTags: ['Reviews'],
        }),
        deleteReviews: builder.mutation<void, { ids: number[] }>({
            query: (body) => ({
                url: '/review/delete',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Reviews'],
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
        updateReview: builder.mutation<Review, Partial<UpdateReview>>({
            query: (review) => ({
                url: '/review/update',
                method: 'POST',
                body: review,
            }),
            invalidatesTags: ['Reviews'],
        }),
        commentReview: builder.mutation<void, CommentReviewRequest>({
            query: (review) => ({
                url: '/review/comment',
                method: 'POST',
                body: review,
            }),
            invalidatesTags: ['Reviews'],
        }),
        rateReview: builder.mutation<RateReviewResponse, RateReviewRequest>({
            query: (review) => ({
                url: '/review/rate',
                method: 'POST',
                body: review,
            }),
            invalidatesTags: ['Reviews'],
        }),
        likeReview: builder.mutation<void, LikeReviewRequest>({
            query: (reviewId) => ({
                url: '/review/like',
                method: 'POST',
                body: reviewId,
            }),
            invalidatesTags: ['Reviews'],
        }),
        commentsOfReview: builder.query<void, number>({
            query: (reviewId) => ({
                url: `/review/comments/?id=${reviewId}`,
            }),
        }),
        ratingOfReview: builder.query<RatingOfReviewByIdResponse, number>({
            query: (reviewId) => ({
                url: `/review/rating/?id=${reviewId}`,
            }),
        }),
        likeOfReview: builder.query<boolean, string>({
            query: (reviewId) => ({
                url: `/review/like/?id=${reviewId}`,
            }),
        }),
    }),
    overrideExisting: false,
});

export const {
    useGetReviewsQuery,
    useCreateReviewMutation,
    useGetReviewByIdQuery,
    useDeleteReviewsMutation,
    useCommentReviewMutation,
    useCommentsOfReviewQuery,
    useRateReviewMutation,
    useRatingOfReviewQuery,
    useLikeOfReviewQuery,
    useLikeReviewMutation,
    useUpdateReviewMutation,
    useGetBestReviewsQuery,
    useSearchQuery,
} = reviewApi;
