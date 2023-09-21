import HTMLReactParser from 'html-react-parser';
import { HTMLAttributes, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useGetUserQuery } from '../api/userApi';
import Comment from '../icons/Comment';
import Likes from '../icons/Likes';
import Star from '../icons/Star';
import { Review, User } from '../types';
import ProfileImage from './ProfileImage';

const ReviewPost = ({
    review,
    ...props
}: { review: Review } & HTMLAttributes<HTMLDivElement>) => {
    const getUser = useGetUserQuery(review.userId);
    const [user, setUser] = useState<User>();

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
            className={`flex flex-col gap-3 w-full max-w-3xl relative p-2 pb-3 rounded-lg overflow-hidden cursor-pointer shadow-xl dark:bg-gray ${props.className}`}
            to={`/review/${review.id}`}
        >
            <Link to={`/profile/${review.userId}`} className="flex gap-3 items-center">
                <ProfileImage src={user ? user.avatar : ''} />
                <div className="flex flex-col gap-0">
                    <p className="font-bold text-sm">{user && user.username}</p>
                    <p className="text-xs">Munbai, India</p>
                </div>
            </Link>
            <div className="items-center gap-8 justify-between lg:items-start">
                <div
                    className="flex flex-col-reverse  h-96 w-full flex-3 bg-center bg-no-repeat bg-cover rounded-lg lg:flex-1 hover:opacity-50"
                    style={{
                        backgroundImage: `url(${
                            review.image || '/assets/review-bg.png'
                        })`,
                    }}
                >
                    <div className="dark:bg-gray">
                        <p className="bg-white w-full p-5 font-semibold text-center whitespace-nowrap truncate dark:bg-gray">
                            {review.title}
                        </p>
                        <div className="flex w-full justify-center gap-5 dark:bg-gray ">
                            <div className="flex gap-2">
                                <Likes />
                                <p className="text-xs">
                                    <span className="font-bold">
                                        {review.likes ? review.likes.length : 0}
                                    </span>
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <Comment />
                                <p className="text-xs">
                                    <span className="font-bold">
                                        {review.comments ? review.comments.length : 0}
                                    </span>
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <Star />
                                <p className="text-xs">
                                    <span className="font-bold">{review.rating}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="absolute text-gray-500 right-5 top-5 text-xs">
                21 September 2021
            </p>
        </Link>
    );
};

export default ReviewPost;
