/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useGetUserReviewsQuery } from '../../../api/userApi';
import Table from '../../../components/Table';
import { Review, User } from '../../../types';

const View = ({ user }: { user: User }) => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const getReviews = useGetUserReviewsQuery(user.id);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = (await getReviews.refetch()).data;
                if (data) {
                    setReviews(data);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);
    return (
        <div className="relative bg-white w-full overflow-x-auto shadow-md sm:rounded-lg p-4 dark:bg-gray ">
            <Table
                rows={reviews.map((review) => [
                    <Link to={`/review/${review.id}`}>
                        <p>{review.title}</p>
                    </Link>,
                    <Link to={`/review/${review.id}`}>
                        <p>{review.objectName}</p>
                    </Link>,
                    <p>{review.grade}</p>,
                    <div className="flex flex-col items-start">
                        {review.tags &&
                            review.tags.map((tag) => (
                                <Link to={'/'} className="font-bold" key={tag.name}>
                                    #{tag.name}
                                </Link>
                            ))}
                    </div>,
                    <p>{review.likes.length}</p>,
                    <p>{review.comments.length}</p>,
                    <p>{review.rating}</p>,
                ])}
                head={[
                    'Review title',
                    'Review object',
                    'My grade',
                    'Tags',
                    'Likes',
                    'Comments',
                    'Rating',
                ]}
            />
        </div>
    );
};

export default View;
