import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { LoginRequest, useLoginMutation, UserResponse } from '../../api/authApi';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Logo from '../../components/Logo';
import { setToken, setUser } from '../../redux/reducers/auth';
import { setAuthDataToLocalStorage } from '../../utils';

const Login = () => {
    const [login, { isLoading, isSuccess }] = useLoginMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formState, setFormState] = useState<LoginRequest>({
        email: '',
        password: '',
    });

    useEffect(() => {
        if (isSuccess) {
            navigate('/');
        }
    }, [isSuccess]);

    const handleChange = ({
        target: { name, value },
    }: React.ChangeEvent<HTMLInputElement>) => {
        setFormState((prev) => ({ ...prev, [name]: value }));
    };

    const handleLogin = async () => {
        login(formState).then((response) => {
            const { user, token } = (response as { data: UserResponse }).data;
            setAuthDataToLocalStorage(user, token);
            dispatch(setUser(user));
            dispatch(setToken(token));
        });
    };

    return (
        <div className="container mx-auto w-full h-screen flex flex-col justify-center items-center">
            <div className="flex flex-col items-center gap-6 bg-white rounded-lg shadow-xl p-10 pb-3">
                <Logo />
                <div className="flex flex-col w-96">
                    <Input
                        onChange={(e) => handleChange(e)}
                        name="email"
                        type="email"
                        label="Email"
                        placeholder="Enter your email"
                        required
                    />
                    <Input
                        onChange={handleChange}
                        name="password"
                        type="password"
                        label="Password"
                        placeholder="Enter your password"
                        required
                    />
                    <Button onClick={handleLogin}>
                        {isLoading ? 'logging in...' : 'Login'}
                    </Button>
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
