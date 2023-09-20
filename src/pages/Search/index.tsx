import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { useSearchQuery } from '../../api/reviewApi';
import { ReviewPost } from '../../components';
import { Review } from '../../types';

const Search = () => {
    const { keyword } = useParams();
    const getReviews = useSearchQuery(keyword || '');
    const [reviews, setReviews] = useState<Review[]>([]);

    const fetchData = async () => {
        try {
            const data = (await getReviews.refetch()).data;
            if (data) {
                setReviews(data);
            }
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        fetchData();
    }, [keyword]);

    return (
        <div className="relative w-full">
            <div className="flex items-center justify-center gap-5 w-full flex-wrap">
                {reviews.map((review) => (
                    <ReviewPost key={review.id} review={review} />
                ))}
                {reviews.length === 0 && <h1 className="text-2xl">No review found</h1>}
            </div>
        </div>
    );
};

export default Search;
