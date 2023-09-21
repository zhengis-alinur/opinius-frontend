import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Moon from '../icons/Moon';
import { useAppSelector } from '../redux/hooks';
import { selectUser } from '../redux/selectors';
import ThemeSwitcher from './ThemeSwitcher';

const BottomNavBar = () => {
    const { t } = useTranslation();
    const user = useAppSelector(selectUser);
    return (
        <>
            {user && (
                <div className="fixed block z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-0 left-1/2 dark:bg-gray dark:border-gray-600 md:hidden">
                    <div className="grid h-full max-w-lg grid-cols-4 mx-auto sm:grid-cols-5">
                        <Link
                            to={`/`}
                            data-tooltip-target="tooltip-home"
                            className="inline-flex flex-col items-center justify-center px-5 rounded-l-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
                        >
                            <svg
                                className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                            </svg>
                            <span className="sr-only">Home</span>
                        </Link>
                        <Link
                            to={`/favorites`}
                            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
                        >
                            <svg
                                className=" text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10 18.35L8.55 17.03C3.4 12.36 0 9.27 0 5.5C0 2.41 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.08C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.41 20 5.5C20 9.27 16.6 12.36 11.45 17.03L10 18.35Z"
                                    fill="currentColor"
                                />
                            </svg>

                            <span className="sr-only">Wallet</span>
                        </Link>

                        <div className=" hidden items-center justify-center sm:flex">
                            <Link
                                to={`/createReview/${user.id}`}
                                data-tooltip-target="tooltip-new"
                                className="items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
                            >
                                <svg
                                    className="w-4 h-4 text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 18 18"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 1v16M1 9h16"
                                    />
                                </svg>
                                <span className="sr-only">New item</span>
                            </Link>
                        </div>

                        <ThemeSwitcher />
                        <Link
                            to={`/profile/${user.id}`}
                            data-tooltip-target="tooltip-profile"
                            className="inline-flex flex-col items-center justify-center px-5 rounded-r-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
                        >
                            <svg
                                className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                            <span className="sr-only">Profile</span>
                        </Link>
                        <div
                            id="tooltip-profile"
                            role="tooltip"
                            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                        >
                            Profile
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default BottomNavBar;
