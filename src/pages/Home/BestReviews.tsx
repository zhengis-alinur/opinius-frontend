import { useState } from 'react';

import { useGetReviewsQuery } from '../../api/reviewApi';
import ReviewCard from '../../components/ReviewCard';

const BestReviews = () => {
    const [hidden, setHidden] = useState(true);
    const { data, isLoading } = useGetReviewsQuery();

    return (
        <div className="`w-full" id="accordion-collapse" data-accordion="collapse">
            <h2 id="accordion-collapse-heading-1">
                <button
                    onClick={() => {
                        setHidden(!hidden);
                    }}
                    type="button"
                    className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    data-accordion-target="#accordion-collapse-body-1"
                    aria-expanded="true"
                    aria-controls="accordion-collapse-body-1"
                >
                    <span>Top 12 the best reviews</span>
                    <svg
                        data-accordion-icon
                        className={`w-3 h-3 rotate-${hidden ? 180 : 0} shrink-0`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5 5 1 1 5"
                        />
                    </svg>
                </button>
            </h2>
            <div
                className={hidden ? 'hidden' : ''}
                id="accordion-collapse-body-1"
                aria-labelledby="accordion-collapse-heading-1"
            >
                <div className="relative w-full mt-4">
                    <div className="flex items-center justify-center gap-5 w-full flex-wrap">
                        {isLoading ? (
                            <p>Loading</p>
                        ) : (
                            data?.map((review) => (
                                <ReviewCard key={review.id} review={review} />
                            ))
                        )}
                    </div>
                </div>{' '}
            </div>
        </div>
    );
};

export default BestReviews;
