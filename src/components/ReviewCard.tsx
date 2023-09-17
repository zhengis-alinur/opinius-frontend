import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useGetUserQuery } from '../api/userApi';
import Comment from '../icons/Comment';
import Likes from '../icons/Likes';
import Star from '../icons/Star';
import { Review, User } from '../types';
import ProfileImage from './ProfileImage';

const ReviewCard = ({
    review,
    ...props
}: { review: Review } & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>) => {
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
            className={`flex flex-col gap-3 w-60 max-h-80 relative p-2 pb-3 rounded-lg overflow-hidden cursor-pointer shadow-xl ${props.className}`}
            to={`/review/${review.id}`}
        >
            <div className="flex gap-3 items-center">
                <ProfileImage src={user ? user.avatar : ''} />
                <div className="flex flex-col gap-0">
                    <p className="font-bold text-sm">{user?.username}</p>
                    <p className="text-xs">Munbai, India</p>
                </div>
            </div>
            <div
                className="flex flex-col-reverse p-2 w-full h-96 bg-center rounded-lg bg-cover"
                style={{
                    backgroundImage: `url(${review.image || '/assets/review-bg.png'})`,
                }}
            >
                <p className="text-white font-semibold text-center whitespace-nowrap truncate">
                    {review.title}
                </p>
            </div>
            <div className="flex justify-center gap-5">
                <div className="flex gap-1">
                    <Likes />
                    <p className="text-xs">
                        <span className="font-bold">{review.likes.length}</span>
                    </p>
                </div>
                <div className="flex gap-1">
                    <Comment />
                    <p className="text-xs">
                        <span className="font-bold">{review.comments.length}</span>
                    </p>
                </div>
                <div className="flex gap-1">
                    <Star />
                    <p className="text-xs">
                        <span className="font-bold">{review.rating}</span>
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default ReviewCard;
