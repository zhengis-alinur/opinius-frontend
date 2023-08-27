import { Outlet } from 'react-router-dom';

import Header from './Header';
import Sidebar from './Sidebar/Sidebar';

const Layout = () => {
    return (
        <div className="flex flex-col">
            <Header />
            <div className="container mx-auto flex gap-5 p-5">
                <Sidebar />
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
