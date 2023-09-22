import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { useLoginMutation, UserResponse } from '../../api/authApi';
import { Button, Input, Logo } from '../../components';
import { useAppDispatch } from '../../redux/hooks';
import { setAuthData } from '../../redux/reducers/auth';

const Login = () => {
    const [login, { isLoading }] = useLoginMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required'),
        }),
        onSubmit: async (values) => {
            try {
                const response = await login(values);
                if ('error' in response) {
                    return;
                }
                const { user, token } = (response as { data: UserResponse }).data;
                dispatch(setAuthData({ user, token }));
                navigate('/');
            } catch (error) {
                console.error('Login error:', error);
            }
        },
    });

    return (
        <div className="container mx-auto w-full h-screen flex flex-col justify-center items-center dark:bg-dark dark:text-dark-text">
            <div className="flex flex-col items-center gap-6 bg-white rounded-lg shadow-xl p-10 pb-3 dark:bg-gray">
                <Logo />
                <form onSubmit={formik.handleSubmit}>
                    <div className="flex flex-col w-full xl:w-96">
                        <Input
                            name="email"
                            label="Email"
                            type="email"
                            placeholder="Email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && formik.errors.email}
                        />
                        <Input
                            name="password"
                            label="Password"
                            type="password"
                            placeholder="Password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && formik.errors.password}
                        />
                        <Button type="submit" disabled={isLoading}>
                            {isLoading ? 'Logging in...' : 'Login'}
                        </Button>
                        <p className="text-xs mt-3 text-center">
                            Dont have an account?{' '}
                            <Link className="font-bold ml-3" to="/signup">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
