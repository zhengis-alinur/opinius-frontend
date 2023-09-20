/* eslint-disable react/jsx-key */
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useDeleteReviewsMutation } from '../../../api/reviewApi';
import { useGetUserReviewsQuery } from '../../../api/userApi';
import { Button, Checkbox, Select } from '../../../components';
import Table, { TableHeadItem, TableToolbar } from '../../../components/Table';
import { ADMIN_ROLE_ID, ORDER, SORTBY_REVIEW } from '../../../constants';
import { useAppSelector } from '../../../redux/hooks';
import { selectUser } from '../../../redux/selectors';
import { Review, User } from '../../../types';

const View = ({ user }: { user: User }) => {
    const formik = useFormik({
        initialValues: {
            sortBy: 'title',
            order: 'ASC',
        },
        onSubmit: async (values) => {
            try {
                const reviewData: { sortBy: string; order: string } = {
                    sortBy: values.sortBy,
                    order: values.order,
                };
                const data = (await getReviews.refetch()).data;
                if (data) {
                    setReviews(data);
                }
                console.log(reviewData);
            } catch (error) {
                console.error('Error creating review:', error);
            }
        },
    });
    const [reviews, setReviews] = useState<Review[]>([]);
    const currentUser = useAppSelector(selectUser);
    const getReviews = useGetUserReviewsQuery({
        id: user.id,
        sortBy: formik.values.sortBy,
        order: formik.values.order,
    });
    const [selectedReviews, setSelectedReviews] = useState<number[]>([]);

    const [deleteReviews] = useDeleteReviewsMutation();

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

    useEffect(() => {
        fetchData();
    }, []);

    const toggleReviewSelection = (reviewId: number) => {
        if (selectedReviews.includes(reviewId)) {
            setSelectedReviews(selectedReviews.filter((id) => id !== reviewId));
        } else {
            setSelectedReviews([...selectedReviews, reviewId]);
        }
    };

    const onAllSelect = () => {
        if (selectedReviews.length < reviews.length) {
            const selected: number[] = [];
            reviews.forEach((review) => selected.push(review.id));
            setSelectedReviews([...selected]);
        } else {
            setSelectedReviews([]);
        }
    };

    const onDelete = async () => {
        await deleteReviews({ ids: selectedReviews });
        await fetchData();
        setSelectedReviews([]);
    };

    return (
        <>
            <div className="relative bg-white w-full overflow-x-auto shadow-md sm:rounded-lg p-4 dark:bg-gray ">
                <div className="flex gap-5 items-center">
                    <Select
                        name="sortBy"
                        label="Sort by"
                        options={SORTBY_REVIEW}
                        value={formik.values.sortBy}
                        onChange={(value) => formik.setFieldValue('sortBy', value)}
                        onBlur={formik.handleBlur}
                        error={formik.touched.sortBy && formik.errors.sortBy}
                    />
                    <Select
                        name="order"
                        label="Order"
                        options={ORDER}
                        value={formik.values.order}
                        onChange={(value) => formik.setFieldValue('order', value)}
                        onBlur={formik.handleBlur}
                        error={formik.touched.order && formik.errors.order}
                    />
                    <Button
                        type="submit"
                        className="text-white"
                        onClick={() => {
                            formik.handleSubmit();
                        }}
                    >
                        Apply
                    </Button>
                    {(currentUser.id === user.id ||
                        currentUser.roleId === ADMIN_ROLE_ID) &&
                        selectedReviews.length > 0 && (
                            <TableToolbar onDelete={onDelete} />
                        )}
                </div>
                <Table
                    rows={reviews.map((review) => [
                        <Checkbox
                            disabled={
                                currentUser.id !== user.id &&
                                currentUser.roleId !== ADMIN_ROLE_ID
                            }
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
                            disabled={
                                currentUser.id !== user.id &&
                                currentUser.roleId !== ADMIN_ROLE_ID
                            }
                            checked={selectedReviews.length === reviews.length}
                            onChange={onAllSelect}
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
        </>
    );
};

export default View;
