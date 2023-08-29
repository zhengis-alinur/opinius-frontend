import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Logo from '../../components/Logo';

const Login = () => {
    return (
        <div className="container mx-auto w-full h-screen flex flex-col justify-center items-center">
            <div className="flex flex-col items-center gap-6 bg-white rounded-lg shadow-xl p-10 pb-3">
                <Logo />
                <div className="flex flex-col w-96">
                    <Input
                        type="email"
                        label="Email"
                        placeholder="Enter your email"
                        required
                    />
                    <Input
                        type="password"
                        label="Password"
                        placeholder="Enter your password"
                        required
                    />
                    <Button>Login</Button>
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
