import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { useGetUserStatsQuery, useSetAvatarMutation } from '../../../api/userApi';
import Button from '../../../components/Button';
import ImageUpload from '../../../components/ImageUploader';
import { ADMIN_ROLE_ID } from '../../../constants';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { setUser } from '../../../redux/reducers/auth';
import { selectUser } from '../../../redux/selectors';
import { User } from '../../../types';
import { UserStats } from '../../../types/UserStats';

const UserInfo = ({
    info,
    value,
    colorClass,
}: {
    info: string;
    value: number;
    colorClass: string;
}) => (
    <div className="flex flex-col items-center">
        <h1 className={`text-4xl font-thin text-left ${colorClass}`}>{value}</h1>
        <h1 className={`text-4xl font-thin text-left ${colorClass}`}>{info}</h1>
    </div>
);

const CreateReviewButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
    <Button {...props} onClick={props.onClick}>
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
    const navigate = useNavigate();
    const currentUser = useAppSelector(selectUser);
    const [stats, setStats] = useState<UserStats>();
    const getStats = useGetUserStatsQuery(user.id);
    const dispatch = useAppDispatch();

    const [setAvatar] = useSetAvatarMutation();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const stats = (await getStats.refetch()).data; // Use userData from the query
                if (stats) {
                    setStats(stats);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const onAvatarUpload = async (imageUrl: string) => {
        const response = await setAvatar({ id: user.id, imageUrl });
        if ('data' in response) {
            dispatch(setUser(response.data));
        }
    };

    return (
        <div
            className={`relative flex flex-col items-center w-full rounded-lg overflow-hidden pb-5 ${
                currentUser.id === user.id &&
                currentUser.roleId === ADMIN_ROLE_ID &&
                ' border-lime-500 border-2 shadow-md shadow-lime-500'
            }`}
        >
            <div
                className="absolute w-full h-full bg-center bg-no-repeat bg-cover brightness-50"
                style={{
                    backgroundImage: `url(${user.avatar || '/assets/review-bg.png'})`,
                }}
            />
            <div className="relative flex flex-col w-full items-center gap-10 p-8 2xl:flex-row">
                <div className="flex flex-col items-center">
                    <ImageUpload
                        uploadable={currentUser.id == user.id}
                        bgImage={user.avatar || '/assets/no-avatar.jpg'}
                        onUpload={onAvatarUpload}
                    />
                    <p className="text-gray-300">{user.username}</p>
                    <p className="text-gray-300">{user.email}</p>
                    {user.blocked && (
                        <p className="text-rose-900 font-bold text-3xl">User blocked</p>
                    )}
                </div>
                {stats && (
                    <div className="flex flex-col items-center  gap-16 lg:flex-row lg:items-end">
                        <div className="flewwx flex-col items-center">
                            <h1 className="text-gray-200 text-3xl text-left ">
                                {stats.reviews === 0 ? 'No' : stats.reviews} review
                                {stats.reviews === 1 ? '' : 's'}
                            </h1>
                        </div>
                        <UserInfo
                            colorClass="text-red-500"
                            info="Likes"
                            value={user.likesCount}
                        />
                        <UserInfo
                            colorClass="text-cyan-500"
                            info="Comments"
                            value={user.commentsCount}
                        />
                        <UserInfo
                            colorClass="text-amber-500"
                            info="Rated"
                            value={user.ratedCount}
                        />
                    </div>
                )}
            </div>
            {(currentUser.id === user.id || currentUser.roleId === ADMIN_ROLE_ID) && (
                <CreateReviewButton
                    disabled={user.blocked}
                    onClick={() => navigate(`/createReview/${user.id}`)}
                />
            )}
        </div>
    );
};

export default Header;
