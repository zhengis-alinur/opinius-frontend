import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import Logo from '../../components/Logo';

const Login = () => {
    return (
        <div className="container mx-auto w-full h-screen flex flex-col justify-center items-center">
            <div className="flex flex-col items-center gap-6 bg-white rounded-lg shadow-xl p-10 pb-3">
                <Logo />
                <div className="flex flex-col w-96">
                    <Input
                        className="mb-2"
                        type="email"
                        label="Email"
                        placeholder="Enter your email"
                        required
                    />
                    <Input
                        className="mb-6"
                        type="password"
                        label="Password"
                        placeholder="Enter your password"
                        required
                    />
                    <button
                        type="button"
                        className="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                        Login
                    </button>
                    <p className="text-xs mt-3 text-center">
                        Don&apos;t have an account?
                        <Link className="font-bold ml-3" to="/signup">
                            Sign up
                        </Link>
                        `
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
