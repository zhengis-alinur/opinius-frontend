import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { useLoginMutation, UserResponse } from '../../api/authApi';
import { Alert, Button, Logo } from '../../components';
import { useAppDispatch } from '../../redux/hooks';
import { setAuthData } from '../../redux/reducers/auth';

const Login = () => {
    const [login, { isLoading, error }] = useLoginMutation();
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
        <div className="container mx-auto w-full h-screen flex flex-col justify-center items-center">
            <div className="flex flex-col items-center gap-6 bg-white rounded-lg shadow-xl p-10 pb-3">
                <Logo />
                <form onSubmit={formik.handleSubmit}>
                    <div className="flex flex-col w-96">
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                className="mt-1 p-2 border rounded-md w-full"
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-red-600 text-xs mt-1">
                                    {formik.errors.email}
                                </div>
                            ) : null}
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                                className="mt-1 p-2 border rounded-md w-full"
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <div className="text-red-600 text-xs mt-1">
                                    {formik.errors.password}
                                </div>
                            ) : null}
                        </div>
                        <Button type="submit" disabled={isLoading}>
                            {isLoading ? 'Logging in...' : 'Login'}
                        </Button>
                        {error && 'data' in error && (
                            <Alert type="warning">{error.data}</Alert>
                        )}
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
