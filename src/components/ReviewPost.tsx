import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import Comment from '../icons/Comment';
import Likes from '../icons/Likes';
import { Review, User } from '../types';
import ProfileImage from './ProfileImage';

const ReviewPost = ({
    review,
    ...props
}: { review: Review } & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>) => {
    const user: User = {
        userName: 'Aliko',
        img: 'https://xsgames.co/randomusers/assets/avatars/male/23.jpg',
    };
    return (
        <Link
            className={`flex flex-col gap-3 w-full relative p-2 pb-3 rounded-lg overflow-hidden cursor-pointer shadow-xl ${props.className}`}
            to={`/review/:id=${review.id}`}
        >
            <div className="flex gap-3 items-center">
                <ProfileImage url={user.img} />
                <div className="flex flex-col gap-0">
                    <p className="font-bold text-sm">{user.userName}</p>
                    <p className="text-xs">Munbai, India</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-8 justify-between lg:flex-row lg:items-start">
                <div
                    className="flex flex-col-reverse p-2 h-96 w-full flex-3 bg-center bg-no-repeat bg-cover rounded-lg lg:flex-1"
                    style={{ backgroundImage: `url(${review.img})` }}
                >
                    <p className="text-white font-semibold text-center whitespace-nowrap truncate">
                        {review.title}
                    </p>
                </div>
                <div className="flex flex-col gap-3 items-start flex-1">
                    <p className="line-clamp-3 lg:line-clamp-14">{review.text}</p>
                    <div className="flex justify-center gap-5">
                        <div className="flex gap-2">
                            <Likes />
                            <p className="text-xs">
                                <span className="font-bold">245</span>
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <Comment />
                            <p className="text-xs">
                                <span className="font-bold">100</span>
                            </p>
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
