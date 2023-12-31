import Login from '../icons/Login';
import LanguageToggler from './LanguageToggler';
import Logo from './Logo';
import SearchBar from './SearchBar';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
    return (
        <div className="bg-white max-w-screen dark:bg-gray dark:border-b-1 dark:shadow-xl">
            <div className="container mx-auto flex justify-between items-center px-5 py-5">
                <Logo />
                <SearchBar />
                <div className="hidden justify-between gap-20 lg:flex">
                    <ThemeSwitcher />
                    <LanguageToggler />
                </div>
                <Login />
            </div>
        </div>
    );
};

export default Header;
