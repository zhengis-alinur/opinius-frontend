import Button from '../../../components/Button';
import ProfileImage from '../../../components/ProfileImage';
import { User } from '../../../types';

const UserInfo = ({
    info,
    value,
    colorClass,
}: {
    info: string;
    value: string;
    colorClass: string;
}) => (
    <div className="flex flex-col items-center">
        <h1 className={`text-4xl font-thin text-left ${colorClass}`}>{value}</h1>
        <h1 className={`text-4xl font-thin text-left ${colorClass}`}>{info}</h1>
    </div>
);

const CreateReviewButton = () => (
    <Button>
        Create new Review
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-plus"
            viewBox="0 0 16 16"
        >
            <path
                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                fill="white"
            ></path>
        </svg>
    </Button>
);

const Header = ({ user }: { user: User }) => {
    return (
        <div className="relative flex flex-col items-center max-w-5xl w-full rounded-lg overflow-hidden pb-5">
            <div
                className="absolute w-full h-full bg-center bg-no-repeat bg-cover brightness-50"
                style={{ backgroundImage: `url(${user.img})` }}
            />
            <div className="relative flex flex-col w-full items-center gap-10 p-8 2xl:flex-row">
                <div className="flex flex-col items-center">
                    <ProfileImage className="mb-1" large url={user.img} />
                    <p className="text-gray-300">{user.email}</p>
                </div>
                <div className="flex flex-col items-center  gap-16 lg:flex-row lg:items-end">
                    <div className="flex flex-col items-center">
                        <h1 className="text-gray-200 text-7xl text-left ">
                            {user.userName}
                        </h1>
                        <h1 className="text-gray-200 text-3xl text-left ">15 reviews</h1>
                    </div>
                    <UserInfo colorClass="text-red-500" info="Likes" value="45" />
                    <UserInfo colorClass="text-cyan-500" info="Comments" value="45" />
                    <UserInfo colorClass="text-amber-500" info="Rating" value="4.5/5" />
                </div>
            </div>
            <CreateReviewButton />
        </div>
    );
};

export default Header;
