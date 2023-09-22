import { useEffect, useState } from 'react';
import Rating from 'react-rating';

import { useRateReviewMutation, useRatingOfReviewQuery } from '../../../api/reviewApi';
import Spinner from '../../../components/Spinner';
import Star from '../../../icons/Star';
import { Review } from '../../../types';

const Rate = ({ review }: { review: Review }) => {
    const [rate, { isLoading }] = useRateReviewMutation();
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
        <div className="flex items-center gap-5 text-xl">
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
                emptySymbol={isLoading ? <Spinner /> : <Star scale={3} />}
                fullSymbol={isLoading ? <Spinner /> : <Star full scale={3} />}
            />
            <span>{getRating.data?.rating}/5</span>
        </div>
    );
};

export default Rate;
