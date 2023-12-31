import { HTMLAttributes, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useGetUserQuery } from '../api/userApi';
import Comment from '../icons/Comment';
import Likes from '../icons/Likes';
import Star from '../icons/Star';
import { Review, User } from '../types';
import ProfileImage from './ProfileImage';
import ReviewStats from './ReviewStats';

const ReviewCard = ({
    review,
    ...props
}: { review: Review } & HTMLAttributes<HTMLDivElement>) => {
    const [user, setUser] = useState<User | null>(null);
    const getUser = useGetUserQuery(review.userId);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const user = (await getUser.refetch()).data;
                if (user) {
                    setUser(user);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);
    return (
        <Link
            className={`flex flex-col gap-3 w-60 max-h-80 relative p-2 pb-3 rounded-lg overflow-hidden cursor-pointer shadow-xl dark:bg-gray ${props.className}`}
            to={`/review/${review.id}`}
        >
            <Link to={`/profile/${review.userId}`} className="flex gap-3 items-center">
                <ProfileImage src={user ? user.avatar : ''} />
                <div className="flex flex-col gap-0">
                    <p className="font-bold text-sm ">{user?.username}</p>
                    <p className="text-xs">Munbai, India</p>
                </div>
            </Link>
            <div
                className="flex flex-col-reverse p-2 w-full h-96 bg-center rounded-lg bg-cover "
                style={{
                    backgroundImage: `url(${review.image || '/assets/review-bg.png'})`,
                }}
            >
                <p className="text-white font-semibold text-center whitespace-nowrap truncate">
                    {review.title}
                </p>
            </div>
            <ReviewStats review={review} />
        </Link>
    );
};

export default ReviewCard;
