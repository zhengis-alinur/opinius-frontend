import { useEffect, useState } from 'react';

import { useLikeReviewMutation, useLikesOfReviewQuery } from '../../../api/reviewApi';
import Spinner from '../../../components/Spinner';
import { AdvancedLikes } from '../../../icons/Likes';
import { Review, User } from '../../../types';
import { Like } from '../../../types/Like';

const View = ({ review, user }: { review: Review; user: User }) => {
    const [likeReview, { isLoading }] = useLikeReviewMutation();
    const [likes, setLikes] = useState<Like[]>();
    const getLikes = useLikesOfReviewQuery(review.id);
    const [liked, setLiked] = useState(false);

    const fetchData = async () => {
        const data = (await getLikes.refetch()).data;
        if (data) {
            console.log(data);
            setLikes(data);
            setLiked(data.find((like) => like.userId === user.id) ? true : false);
        }
    };

    const onLike = async () => {
        if (review.id) {
            try {
                await likeReview({ reviewId: review.id });
                await fetchData();
            } catch (error) {
                console.error(error);
            }
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            {isLoading ? (
                <Spinner />
            ) : (
                <AdvancedLikes
                    scale={4}
                    liked={liked}
                    onClick={() => {
                        onLike();
                    }}
                >
                    <span className="font-bold text-white text-xl">{likes?.length}</span>
                </AdvancedLikes>
            )}
        </>
    );
};

export default View;
