import ProfileImage from '../../../components/ProfileImage';
import { Review, User } from '../../../types';

const Header = ({ user, review }: { user: User; review: Review }) => {
    return (
        <div className="relative w-full rounded-lg overflow-hidden">
            <div
                className="absolute w-full h-full bg-center bg-no-repeat bg-cover brightness-50"
                style={{ backgroundImage: `url(${review.img})` }}
            />
            <div className="relative flex flex-col w-full items-center p-8">
                <div className="flex flex-col items-center">
                    <ProfileImage url={user.img} />
                    <p className="text-white">{user.userName}</p>
                </div>
                <div className="text-4xl text-center">
                    <h1 className="text-white">{review.title}</h1>
                </div>
            </div>
            <p className="absolute text-gray-500 right-5 bottom-3 text-xs">
                21 September 2021
            </p>
        </div>
    );
};

export default Header;
