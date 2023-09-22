import { HTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

import { ADMIN_ROLE_ID } from '../../constants';
import Admin from '../../icons/Admin';
import { useAppSelector } from '../../redux/hooks';
import { selectUser } from '../../redux/selectors';
import ProfileImage from '../ProfileImage';
import Account from './icons/Account';
import Home from './icons/Home';
import Likes from './icons/Likes';
import Settings from './icons/Settings';

const SidebarItem = (props: HTMLAttributes<HTMLDivElement>) => (
    <div className="flex gap-3 items-center">{props.children}</div>
);

const Sidebar = (props: HTMLAttributes<HTMLDivElement>) => {
    const { t } = useTranslation();

    const user = useAppSelector(selectUser);
    const navigate = useNavigate();
    return (
        <div
            className={`hidden flex-col items-center whitespace-nowrap xl:min-w-[200px] h-fit bg-white p-5 gap-10 rounded-xl shadow-xl ${props.className} md:flex dark:bg-gray`}
        >
            <Link to={`/profile/${user.id}`}>
                <ProfileImage src={user.avatar} />
                <p className="mt-3">{user.username}</p>
            </Link>
            <div className="flex flex-col items-start justify-between gap-10">
                <SidebarItem>
                    <button
                        onClick={() => navigate(`/profile/${user.id}`)}
                        className="flex flex-nowrap gap-2 items-center"
                    >
                        {user.roleId === ADMIN_ROLE_ID ? (
                            <>
                                <Admin />
                                <p className=" hidden xl:block text-lime-700">
                                    {t('sidebar-admin-page')}
                                </p>
                            </>
                        ) : (
                            <>
                                <Account />
                                <p className="hidden xl:block">
                                    {t('sidebar-profile-page')}
                                </p>
                            </>
                        )}
                    </button>
                </SidebarItem>
                <SidebarItem>
                    <Link to="/" className="flex flex-nowrap gap-2 items-center ">
                        <Home />
                        <p className="hidden xl:block">{t('sidebar-home-page')}</p>
                    </Link>
                </SidebarItem>
                <SidebarItem>
                    <Link to="/favorites" className="flex flex-nowrap gap-2 items-center">
                        <Likes />
                        <p className="hidden xl:block">{t('sidebar-favorites-page')}</p>
                    </Link>
                </SidebarItem>

                <SidebarItem>
                    <Link to="/settings" className="flex flex-nowrap gap-2 items-center">
                        <Settings />
                        <p className="hidden xl:block">{t('sidebar-settings-page')}</p>
                    </Link>
                </SidebarItem>
            </div>
        </div>
    );
};

export default Sidebar;
