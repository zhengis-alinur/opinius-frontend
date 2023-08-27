import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import Comment from '../icons/Comment';
import Likes from '../icons/Likes';
import ProfileImage from './ProfileImage';

const ReviewCard = ({
    reviewId,
    title,
    url,
    ...props
}: { reviewId: string; title: string; url: string } & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>) => {
    return (
        <Link
            className={`flex flex-col gap-3 w-60 max-h-80 relative p-2 pb-3 rounded-lg overflow-hidden cursor-pointer shadow-xl ${props.className}`}
            to={`/review/:id=${reviewId}`}
        >
            <div className="flex gap-3 items-center">
                <ProfileImage url="https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg" />
                <div className="flex flex-col gap-0">
                    <p className="font-bold text-sm">nkchaudhary01</p>
                    <p className="text-xs">Munbai, India</p>
                </div>
            </div>
            <div
                className="flex flex-col-reverse p-2 w-full h-96 bg-center rounded-lg"
                style={{ backgroundImage: `url(${url})` }}
            >
                <p className="text-white font-semibold text-center whitespace-nowrap truncate">
                    {title}
                </p>
            </div>
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
        </Link>
    );
};

export default ReviewCard;
