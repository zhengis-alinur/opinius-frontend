import { useFormik } from 'formik';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { useSignupMutation } from '../../api/authApi';
import { Button, Input, Logo } from '../../components';

const Signup = () => {
    const [signup, { isLoading }] = useSignupMutation();
    const navigate = useNavigate();
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('Firstname is required'),
            lastName: Yup.string().required('Lastname is required'),
            username: Yup.string().required('Username is required'),
            email: Yup.string().email().required('Email is required'),
            password: Yup.string().required('Password is required'),
        }),

        onSubmit: async (values) => {
            await signup({ ...values });
            navigate('/login');
        },
    });
    return (
        <div className="container mx-auto w-full h-screen flex flex-col justify-center items-center dark:bg-dark dark:text-dark-text">
            <div className="flex flex-col items-center gap-6 bg-white rounded-lg shadow-xl p-10 pb-3 dark:bg-gray">
                <Logo />
                <form className="flex flex-col w-96">
                    <div className="flex gap-5 mb-2">
                        <Input
                            name="firstName"
                            type="text"
                            label="First name"
                            placeholder="John"
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                            error={formik.touched.firstName && formik.errors.firstName}
                        />
                        <Input
                            name="lastName"
                            type="text"
                            label="Last name"
                            placeholder="Doe"
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                            error={formik.touched.lastName && formik.errors.lastName}
                        />
                    </div>
                    <div className="flex gap-5 mb-2">
                        <Input
                            name="username"
                            type="text"
                            label="Username"
                            placeholder="Doe_1000"
                            onChange={formik.handleChange}
                            value={formik.values.username}
                            error={formik.touched.username && formik.errors.username}
                        />
                        <Input
                            name="email"
                            type="email"
                            label="Email"
                            placeholder="some@mail.com"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            error={formik.touched.email && formik.errors.email}
                        />
                    </div>

                    <Input
                        name="password"
                        type="password"
                        label="Password"
                        placeholder="Enter your password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        error={formik.touched.password && formik.errors.password}
                    />
                    <Input
                        name="confirmPassword"
                        type="password"
                        label="Confirm password"
                        placeholder="Enter your password"
                        value={confirmPassword}
                        onChange={(e) => {
                            setConfirmPassword(e.target.value);
                        }}
                        error={
                            formik.values.password !== confirmPassword
                                ? 'Passwords does not match'
                                : ''
                        }
                    />
                    <Button onClick={() => formik.handleSubmit()}>
                        {isLoading ? 'Signing up...' : 'Sign up'}
                    </Button>
                    <p className="text-xs mt-3 text-center">
                        You already have an account?
                        <Link className="font-bold ml-3" to="/login">
                            Log in
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
