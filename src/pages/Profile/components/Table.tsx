/* eslint-disable react/jsx-key */
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { useDeleteReviewsMutation } from '../../../api/reviewApi';
import { useGetUserReviewsQuery } from '../../../api/userApi';
import { Button, Checkbox, Select } from '../../../components';
import Table, { TableHeadItem, TableToolbar } from '../../../components/Table';
import { ADMIN_ROLE_ID, ORDER, SORTBY_REVIEW } from '../../../constants';
import Edit from '../../../icons/Edit';
import Eye from '../../../icons/Eye';
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

    const { t } = useTranslation();

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
    }, [user]);

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
            <div className="relative bg-white overflow-x-auto shadow-md sm:rounded-lg p-4 dark:bg-gray ">
                <div className="flex flex-col gap-5">
                    <Select
                        name="sortBy"
                        label={t('sort-by')}
                        options={SORTBY_REVIEW}
                        value={formik.values.sortBy}
                        onChange={(value) => formik.setFieldValue('sortBy', value)}
                        onBlur={formik.handleBlur}
                        error={formik.touched.sortBy && formik.errors.sortBy}
                    />
                    <Select
                        name="order"
                        label={t('order')}
                        options={ORDER}
                        value={formik.values.order}
                        onChange={(value) => formik.setFieldValue('order', value)}
                        onBlur={formik.handleBlur}
                        error={formik.touched.order && formik.errors.order}
                    />
                    <Button
                        type="submit"
                        className="text-white max-w-[100px]"
                        onClick={() => {
                            formik.handleSubmit();
                        }}
                    >
                        {t('apply')}
                    </Button>
                    {currentUser &&
                        (currentUser.id === user.id ||
                            currentUser.roleId === ADMIN_ROLE_ID) &&
                        selectedReviews.length > 0 && (
                            <TableToolbar onDelete={onDelete} />
                        )}
                </div>
                <Table
                    rows={reviews.map((review) => [
                        <Checkbox
                            disabled={
                                currentUser &&
                                currentUser.id !== user.id &&
                                currentUser.roleId !== ADMIN_ROLE_ID
                            }
                            checked={selectedReviews.includes(review.id)}
                            onChange={() => toggleReviewSelection(review.id)}
                        />,
                        <p>{review.title}</p>,
                        <p>{review.objectName}</p>,
                        <p>{review.grade}</p>,
                        <div className="flex flex-col items-start">
                            {review.tags &&
                                review.tags.map((tag) => (
                                    <Link
                                        to={`/search/${tag.name}`}
                                        className="font-bold"
                                        key={tag.name}
                                    >
                                        #{tag.name}
                                    </Link>
                                ))}
                        </div>,
                        <p>{review.likes.length}</p>,
                        <p>{review.comments.length}</p>,
                        <p>{review.rating}</p>,
                        <Link to={`/editReview/${review.id}`}>
                            <Edit
                                className={`hidden ${
                                    currentUser &&
                                    (user.id === currentUser.id ||
                                        currentUser.roleId === ADMIN_ROLE_ID) &&
                                    'block'
                                }`}
                            />
                        </Link>,
                        <Link to={`/review/${review.id}`}>
                            <Eye />
                        </Link>,
                    ])}
                    head={[
                        <Checkbox
                            disabled={
                                currentUser &&
                                currentUser.id !== user.id &&
                                currentUser.roleId !== ADMIN_ROLE_ID
                            }
                            checked={selectedReviews.length === reviews.length}
                            onChange={onAllSelect}
                        />,
                        <TableHeadItem title={t('review-title')} />,
                        <TableHeadItem title={t('review-object')} />,
                        <TableHeadItem title={t('my-grade')} />,
                        <TableHeadItem title={t('tags')} />,
                        <TableHeadItem title={t('n-likes')} />,
                        <TableHeadItem title={t('n-comments')} />,
                        <TableHeadItem title={t('n-rates')} />,
                    ]}
                />
            </div>
        </>
    );
};

export default View;
