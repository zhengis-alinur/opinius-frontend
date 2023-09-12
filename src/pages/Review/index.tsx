import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { useGetReviewByIdQuery } from '../../api/reviewApi';
import { useGetUserQuery } from '../../api/userApi';
import Container from '../../components/Container';
import Likes from '../../icons/Likes';
import { Review, User } from '../../types';
import AddComment from './components/AddComment';
import Comments from './components/Comments';
import Content from './components/Content';
import Header from './components/Header';
import Rate from './components/Rate';

const View = () => {
    const { id } = useParams();

    const [review, setReview] = useState<Review>();
    const [user, setUser] = useState<User>();

    const getReview = useGetReviewByIdQuery(id || '');
    useEffect(() => {
        const fetchData = async () => {
            const data = (await getReview.refetch()).data;
            if (data) {
                setReview(data.review);
                setUser(data.user);
            }
        };
        fetchData();
    }, []);
    return (
        <div className="flex flex-col justify-between w-full gap-5">
            {review && user && (
                <>
                    <Container className="flex flex-col gap-5 items-center">
                        <Header user={user} review={review} />
                        <Content text={review.text} />
                        <div className="self-start">
                            <p className="font-bold">
                                {user.username + "'"}s final rate: {review.grade}/10
                            </p>
                        </div>
                        <h1>Did you like this review?</h1>
                        <Likes scale={4} />
                        <Rate rating={review.rating} />
                    </Container>
                    <AddComment />
                    <Comments comments={review.comments} />
                </>
            )}
        </div>
    );
};

export default View;
