/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useGetUserReviewsQuery } from '../../../api/userApi';
import { Checkbox } from '../../../components';
import Table, {
    TableHeadItem,
    TableSearch,
    TableToolbar,
} from '../../../components/Table';
import { ADMIN_ROLE_ID } from '../../../constants';
import { useAppSelector } from '../../../redux/hooks';
import { selectUser } from '../../../redux/selectors';
import { Review, User } from '../../../types';

const View = ({ user }: { user: User }) => {
    const currentUser = useAppSelector(selectUser);
    const [reviews, setReviews] = useState<Review[]>([]);
    const getReviews = useGetUserReviewsQuery(user.id);
    const [selectedReviews, setSelectedReviews] = useState<number[]>([]);

    const toggleReviewSelection = (reviewId: number) => {
        if (selectedReviews.includes(reviewId)) {
            setSelectedReviews(selectedReviews.filter((id) => id !== reviewId));
        } else {
            setSelectedReviews([...selectedReviews, reviewId]);
        }
    };

    const onAllSelect = () => {
        if (selectedReviews.length === 0) {
            const selected: number[] = [];
            reviews.forEach((review) => selected.push(review.id));
            setSelectedReviews([...selected]);
        } else {
            setSelectedReviews([]);
        }
    };

    const onDelete = () => {
        console.log(selectedReviews);
    };

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
            <div className="flex justify-start items-center gap-10  mb-3">
                <TableSearch />
                {(currentUser.id === user.id || currentUser.roleId === ADMIN_ROLE_ID) && (
                    <TableToolbar onDelete={onDelete} />
                )}
            </div>
            <Table
                rows={reviews.map((review) => [
                    <Checkbox
                        disabled={currentUser.id !== user.id}
                        checked={selectedReviews.includes(review.id)}
                        onChange={() => toggleReviewSelection(review.id)}
                    />,
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
                    <Checkbox
                        disabled={currentUser.id !== user.id}
                        checked={selectedReviews.length === reviews.length}
                        onChange={() => onAllSelect()}
                    />,
                    <TableHeadItem title="Review title" />,
                    <TableHeadItem title="Review object" />,
                    <TableHeadItem title="My grade" />,
                    <TableHeadItem title="Tags" />,
                    <TableHeadItem title="Likes" />,
                    <TableHeadItem title="Comments" />,
                    <TableHeadItem title="Rating" />,
                ]}
            />
        </div>
    );
};

export default View;
