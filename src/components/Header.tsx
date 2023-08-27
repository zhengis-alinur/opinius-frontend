import Login from '../icons/Login';
import Logo from './Logo';
import SearchBar from './SearchBar';

const Header = () => {
    return (
        <div className="bg-white max-w-screen">
            <div className="container mx-auto flex justify-between items-center px-5 py-5">
                <Logo />
                <SearchBar />
                <Login />
            </div>
        </div>
    );
};

export default Header;
