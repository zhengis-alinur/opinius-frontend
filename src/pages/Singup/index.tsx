import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Logo from '../../components/Logo';

const Signup = () => {
    return (
        <div className="container mx-auto w-full h-screen flex flex-col justify-center items-center">
            <div className="flex flex-col items-center gap-6 bg-white rounded-lg shadow-xl p-10 pb-3">
                <Logo />
                <div className="flex flex-col w-96">
                    <div className="flex gap-5 mb-2">
                        <Input
                            required
                            type="text"
                            label="First name"
                            placeholder="John"
                        />
                        <Input required type="text" label="Last name" placeholder="Doe" />
                    </div>
                    <Input
                        required
                        type="email"
                        label="Email"
                        placeholder="some@mail.com"
                    />
                    <Input
                        required
                        type="password"
                        label="Password"
                        placeholder="Enter your password"
                    />
                    <Input
                        className="mb-6"
                        required
                        type="password"
                        label="Confirm password"
                        placeholder="Enter your password"
                    />
                    <Button>Sign up</Button>
                    <p className="text-xs mt-3 text-center">
                        You already have an account?
                        <Link className="font-bold ml-3" to="/login">
                            Log in
                        </Link>
                        `
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
