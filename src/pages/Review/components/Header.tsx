import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import ProfileImage from '../../../components/ProfileImage';
import ReviewStats from '../../../components/ReviewStats';
import { ADMIN_ROLE_ID } from '../../../constants';
import Comment from '../../../icons/Comment';
import Edit from '../../../icons/Edit';
import Likes from '../../../icons/Likes';
import Star from '../../../icons/Star';
import { useAppSelector } from '../../../redux/hooks';
import { selectUser } from '../../../redux/selectors';
import { Review, User } from '../../../types';
import { getDateFromMysql } from '../../../utils';

const Header = ({ reviewUser, review }: { reviewUser: User; review: Review }) => {
    const navigate = useNavigate();
    const user = useAppSelector(selectUser);
    return (
        <div className="relative w-full rounded-lg overflow-hidden">
            <div
                className="absolute w-full h-full bg-center bg-no-repeat bg-cover brightness-50"
                style={{
                    backgroundImage: `url(${review.image || '/assets/review-bg.png'})`,
                }}
            />
            <div className="relative flex flex-col w-full items-center p-8">
                <Link
                    to={`/profile/${review.userId}`}
                    className="flex flex-col items-center"
                >
                    <ProfileImage large src={reviewUser.avatar} />
                    <p className="text-white mt-3 text-xl">{reviewUser.username}</p>
                </Link>
                <div className="text-4xl text-center">
                    <h1 className="text-white">{review.title}</h1>
                </div>
            </div>
            <p className="absolute bg-white p-2 rounded-md right-5 bottom-3 text-xs">
                {getDateFromMysql(review.createdAt)}
            </p>
            {user && (user.id === review.userId || user.roleId === ADMIN_ROLE_ID) && (
                <Link
                    to={`/editReview/${review.id}`}
                    className="absolute  right-5 top-3 bg-white p-3 rounded-md"
                >
                    <Edit />
                </Link>
            )}
        </div>
    );
};

export default Header;
