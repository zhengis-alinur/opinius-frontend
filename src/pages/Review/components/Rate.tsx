import { useEffect, useState } from 'react';
import Rating from 'react-rating';

import { useRateReviewMutation, useRatingOfReviewQuery } from '../../../api/reviewApi';
import Star from '../../../icons/Star';
import { Review } from '../../../types';
import { Rating as RatingType } from '../../../types/Rating';

const Rate = ({ review }: { review: Review }) => {
    const [rate] = useRateReviewMutation();
    const getRating = useRatingOfReviewQuery(review.id);

    const [rating, setRating] = useState<{ rating: number; rated: boolean }>({
        rating: 0,
        rated: true,
    });

    const fetchData = async () => {
        const data = (await getRating.refetch()).data;
        if (data) {
            setRating(data);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Rating
            readonly={rating.rated}
            initialRating={getRating.data?.rating}
            onChange={async (e) => {
                await rate({
                    rating: e,
                    reviewId: review.id,
                });
                fetchData();
            }}
            emptySymbol={<Star scale={3} />}
            fullSymbol={<Star full scale={3} />}
        />
    );
};

export default Rate;
