import { useTranslation } from 'react-i18next';

import { useGetReviewsQuery } from '../../api/reviewApi';
import { ReviewPost } from '../../components';

const RecentReviews = () => {
    const { data } = useGetReviewsQuery();
    const { t } = useTranslation();

    return (
        <div className="relative w-full">
            <h1 className="text-3xl mb-5 text-center">{t('recent-title')}</h1>
            <div className="flex items-center justify-center gap-5 w-full flex-wrap">
                {data?.map((review) => (
                    <ReviewPost key={review.id} review={review} />
                ))}
            </div>
        </div>
    );
};

export default RecentReviews;
