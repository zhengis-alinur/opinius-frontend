import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import {
    useGetReviewByIdQuery,
    useLikeOfReviewQuery,
    useLikeReviewMutation,
} from '../../api/reviewApi';
import Container from '../../components/Container';
import Likes from '../../icons/Likes';
import { useAppSelector } from '../../redux/hooks';
import { selectUser } from '../../redux/selectors';
import { Review, User } from '../../types';
import AddComment from './components/AddComment';
import Comments from './components/Comments';
import Content from './components/Content';
import Header from './components/Header';
import Rate from './components/Rate';

const View = () => {
    const { id } = useParams();
    const user = useAppSelector(selectUser);
    const getReview = useGetReviewByIdQuery(id || '');
    const getLike = useLikeOfReviewQuery(id || '');
    const [reviewUser, setReviewUserUser] = useState<User>();
    const [review, setReview] = useState<Review>();
    const [likeReview] = useLikeReviewMutation();

    useEffect(() => {
        const fetchData = async () => {
            const data = (await getReview.refetch()).data;
            if (data) {
                setReview(data.review);
                setReviewUserUser(data.user);
                await getLike.refetch();
            }
        };
        fetchData();
    }, []);

    const onLike = async () => {
        if (id) {
            await likeReview({ reviewId: id });
            getLike.refetch();
        }
    };
    return (
        <div className="flex flex-col justify-between w-full gap-5">
            {review && reviewUser && (
                <>
                    <Container className="flex flex-col gap-5 items-center">
                        <Header reviewUser={reviewUser} review={review} />
                        <Content text={review.text} />
                        <div className="self-start">
                            <p className="font-bold">
                                {reviewUser.username + "'"}s final rate: {review.grade}/10
                            </p>
                        </div>
                        <h1>Did you like this review?</h1>
                        <Likes
                            scale={4}
                            liked={getLike.data}
                            onClick={() => {
                                onLike();
                            }}
                        />
                        <Rate review={review} />
                    </Container>
                    <AddComment review={review} />
                    <Comments reviewId={review.id} />
                </>
            )}
        </div>
    );
};

export default View;
