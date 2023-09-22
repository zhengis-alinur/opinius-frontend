import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';

import { useGetReviewByIdQuery } from '../../api/reviewApi';
import Container from '../../components/Container';
import ReviewStats from '../../components/ReviewStats';
import { useAppSelector } from '../../redux/hooks';
import { selectUser } from '../../redux/selectors';
import { Review, User } from '../../types';
import AddComment from './components/AddComment';
import Comments from './components/Comments';
import Content from './components/Content';
import Header from './components/Header';
import Like from './components/Like';
import Rate from './components/Rate';
import Tags from './components/Tags';

const View = () => {
    const { id } = useParams();
    const user = useAppSelector(selectUser);
    const getReview = useGetReviewByIdQuery(id || '');
    const [reviewUser, setReviewUserUser] = useState<User>();
    const [review, setReview] = useState<Review>();
    const { t } = useTranslation();

    const fetchData = async () => {
        const data = (await getReview.refetch()).data;
        if (data) {
            setReview(data.review);
            setReviewUserUser(data.user);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="flex flex-col justify-between w-full gap-5">
            {review && reviewUser && (
                <>
                    <Container className="flex flex-col gap-5 items-center">
                        <Header reviewUser={reviewUser} review={review} />
                        <Tags tags={review.tags} />
                        <Content text={review.text} />
                        <div className="self-start">
                            <p className="font-bold">
                                {reviewUser.username + t('final-rate')}
                                {': '}
                                <span className="text-3xl">{review.grade}</span>/10
                            </p>
                        </div>
                        {user ? (
                            <>
                                <h1>{t('did-liked-q')}</h1>
                                <Like review={review} user={user} />
                                <Rate review={review} />
                            </>
                        ) : (
                            <h1>{t('login-to-rate')}</h1>
                        )}
                    </Container>
                    {user && <AddComment review={review} />}
                    <Comments reviewId={review.id} />
                </>
            )}
        </div>
    );
};

export default View;
