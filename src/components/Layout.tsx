import { Outlet } from 'react-router-dom';

import { useAppSelector } from '../redux/hooks';
import { selectUser } from '../redux/selectors';
import Header from './Header';
import Sidebar from './Sidebar/Sidebar';

const Layout = () => {
    const user = useAppSelector(selectUser);
    return (
        <div className="flex flex-col dark:bg-dark min-h-screen dark:text-dark-text">
            <Header />
            <div className="container mx-auto flex items-start gap-5 px-20 py-5">
                {user ? <Sidebar /> : null}
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
