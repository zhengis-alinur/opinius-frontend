import { t } from 'i18next';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';

import { useSearchQuery } from '../../api/reviewApi';
import { ReviewPost } from '../../components';
import { Review } from '../../types';

const Search = () => {
    const { keyword } = useParams();
    const getReviews = useSearchQuery(keyword || '');
    const [reviews, setReviews] = useState<Review[]>([]);
    const { t } = useTranslation();

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
            <div className="flex flex-col items-center justify-center gap-5 w-full flex-wrap">
                <h1 className="text-2xl text-left w-full">
                    {reviews.length === 0
                        ? t('no-review-found')
                        : `${t('found')} ${t('n-reviews').toLowerCase()}: ${
                              reviews.length
                          }`}
                </h1>

                {reviews.map((review) => (
                    <ReviewPost key={review.id} review={review} />
                ))}
            </div>
        </div>
    );
};

export default Search;
