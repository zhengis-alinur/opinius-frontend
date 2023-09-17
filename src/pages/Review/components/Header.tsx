import { useNavigate } from 'react-router';

import ProfileImage from '../../../components/ProfileImage';
import Edit from '../../../icons/Edit';
import { useAppSelector } from '../../../redux/hooks';
import { selectUser } from '../../../redux/selectors';
import { Review, User } from '../../../types';

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
                <div className="flex flex-col items-center">
                    <ProfileImage src={reviewUser.avatar} />
                    <p className="text-white">{reviewUser.username}</p>
                </div>
                <div className="text-4xl text-center">
                    <h1 className="text-white">{review.title}</h1>
                </div>
            </div>
            <p className="absolute text-gray-500 right-5 bottom-3 text-xs">
                21 September 2021
            </p>
            {user.id === review.userId && (
                <Edit
                    onClick={() => navigate(`/editReview/${review.id}`)}
                    className="absolute right-5 top-3"
                />
            )}
        </div>
    );
};

export default Header;
