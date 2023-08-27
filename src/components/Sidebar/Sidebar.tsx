import { Link } from 'react-router-dom';

import ProfileImage from '../ProfileImage';
import Account from './icons/Account';
import Home from './icons/Home';
import Likes from './icons/Likes';
import Settings from './icons/Settings';

const SidebarItem = (
    props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
) => <div className="flex gap-3 items-center">{props.children}</div>;

const Sidebar = (
    props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
) => {
    return (
        <div
            className={`hidden flex-col items-center whitespace-nowrap h-fit bg-white p-5 gap-10 rounded-xl shadow-xl ${props.className} md:flex`}
        >
            <ProfileImage url="https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg" />
            <div className="flex flex-col items-start justify-between gap-10">
                <SidebarItem>
                    <Link to="/" className="flex flex-nowrap gap-2 items-center">
                        <Home />
                        <p> Home page</p>
                    </Link>
                </SidebarItem>
                <SidebarItem>
                    <Link to="/" className="flex flex-nowrap gap-2 items-center">
                        <Likes />
                        <p>Favorites reviews</p>
                    </Link>
                </SidebarItem>
                <SidebarItem>
                    <Link to="/" className="flex flex-nowrap gap-2 items-center">
                        <Account />
                        <p>Profile page</p>
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
