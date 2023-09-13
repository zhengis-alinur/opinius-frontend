import Rating from 'react-rating';

import { useRateReviewMutation, useRatingOfReviewQuery } from '../../../api/reviewApi';
import Star from '../../../icons/Star';
import { Review } from '../../../types';

const Rate = ({ review }: { review: Review }) => {
    const [rate] = useRateReviewMutation();
    const getRating = useRatingOfReviewQuery(review.id);
    return (
        <Rating
            readonly={getRating.data?.rated}
            initialRating={getRating.data?.rating}
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
