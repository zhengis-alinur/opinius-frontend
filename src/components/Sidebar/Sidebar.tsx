import { HTMLAttributes } from 'react';
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
    const user = useAppSelector(selectUser);
    const navigate = useNavigate();
    return (
        <div
            className={`hidden flex-col items-center whitespace-nowrap h-fit bg-white p-5 gap-10 rounded-xl shadow-xl ${props.className} md:flex dark:bg-gray`}
        >
            <ProfileImage src={user.avatar} />
            <div className="flex flex-col items-start justify-between gap-10">
                <SidebarItem>
                    <button
                        onClick={() => navigate(`/profile/${user.id}`)}
                        className="flex flex-nowrap gap-2 items-center"
                    >
                        {user.roleId === ADMIN_ROLE_ID ? (
                            <>
                                <Admin />
                                <p className=" text-lime-700"> Administration</p>
                            </>
                        ) : (
                            <>
                                <Account />
                                <p>Profile page</p>
                            </>
                        )}
                    </button>
                </SidebarItem>
                <SidebarItem>
                    <Link to="/" className="flex flex-nowrap gap-2 items-center ">
                        <Home />
                        <p> Home page</p>
                    </Link>
                </SidebarItem>
                <SidebarItem>
                    <Link to="/favorites" className="flex flex-nowrap gap-2 items-center">
                        <Likes />
                        <p>Favorites reviews</p>
                    </Link>
                </SidebarItem>

                <SidebarItem>
                    <Link to="/" className="flex flex-nowrap gap-2 items-center">
                        <Settings />
                        <p>Settings</p>
                    </Link>
                </SidebarItem>
            </div>
        </div>
    );
};

export default Sidebar;
