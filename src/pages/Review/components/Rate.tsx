import { useState } from 'react';
import Rating from 'react-rating';

import { useRateReviewMutation, useRatingOfReviewQuery } from '../../../api/reviewApi';
import Star from '../../../icons/Star';
import { useAppSelector } from '../../../redux/hooks';
import { Review } from '../../../types';

const Rate = ({ review }: { review: Review }) => {
    const [rate] = useRateReviewMutation();
    const getRating = useRatingOfReviewQuery(review.id);
    return (
        <Rating
            initialRating={getRating.data}
            onChange={async (e) => {
                await rate({
                    rating: e,
                    reviewId: review.id,
                });
                await getRating.refetch();
            }}
            emptySymbol={<Star scale={3} />}
            fullSymbol={<Star full scale={3} />}
        />
    );
};

export default Rate;
