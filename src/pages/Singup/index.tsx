import { Badge } from 'flowbite-react';
import { FormEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { SignupRequest, useSignupMutation } from '../../api/authApi';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Logo from '../../components/Logo';

const Signup = () => {
    const [signup, { isLoading, isSuccess, isError }] = useSignupMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formState, setFormState] = useState<SignupRequest>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    useEffect(() => {
        if (isSuccess) {
            navigate('/login');
        }
    }, [isSuccess]);

    const handleChange = ({
        target: { name, value },
    }: React.ChangeEvent<HTMLInputElement>) => {
        setFormState((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        signup(formState);
    };

    return (
        <div className="container mx-auto w-full h-screen flex flex-col justify-center items-center">
            <div className="flex flex-col items-center gap-6 bg-white rounded-lg shadow-xl p-10 pb-3">
                <Logo />
                {isError && <Badge title="Something went wrong" />}
                <form className="flex flex-col w-96" onSubmit={handleSubmit}>
                    <div className="flex gap-5 mb-2">
                        <Input
                            onChange={handleChange}
                            name="firstName"
                            required
                            type="text"
                            label="First name"
                            placeholder="John"
                        />
                        <Input
                            onChange={handleChange}
                            required
                            type="text"
                            name="lastName"
                            label="Last name"
                            placeholder="Doe"
                        />
                    </div>
                    <div className="flex gap-5 mb-2">
                        <Input
                            onChange={handleChange}
                            required
                            type="text"
                            name="username"
                            label="Username"
                            placeholder="Doe_1000"
                        />
                        <Input
                            onChange={handleChange}
                            required
                            name="email"
                            type="email"
                            label="Email"
                            placeholder="some@mail.com"
                        />
                    </div>

                    <Input
                        onChange={handleChange}
                        required
                        name="password"
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
                    <Button type="submit">
                        {isLoading ? 'Signing up...' : 'Sign up'}
                    </Button>
                    <p className="text-xs mt-3 text-center">
                        You already have an account?
                        <Link className="font-bold ml-3" to="/login">
                            Log in
                        </Link>
                        `
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
