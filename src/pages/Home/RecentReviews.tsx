import { useState } from 'react';

import { useGetReviewsQuery } from '../../api/reviewApi';
import ReviewPost from '../../components/ReviewPost';
import { User } from '../../types';

const RecentReviews = () => {
    const { data, error, isLoading } = useGetReviewsQuery();

    return (
        <div className="relative w-full">
            <h1 className="text-3xl mb-5 text-center">Recent Reviews</h1>
            <div className="flex items-center justify-center gap-5 w-full flex-wrap">
                {data?.map((review) => (
                    <ReviewPost key={review.id} review={review} />
                ))}
            </div>
        </div>
    );
};

export default RecentReviews;
