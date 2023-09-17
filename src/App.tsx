import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/Layout';
import CreateReview from './pages/CreateReview';
import EditReview from './pages/EditReview';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Review from './pages/Review';
import Signup from './pages/Singup';

function App() {
    const routers = createBrowserRouter([
        {
            element: <Layout />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                    // loader: authLoader,
                },
                {
                    path: '/profile',
                    element: <Profile />,
                },
                {
                    path: '/review/:id',
                    element: <Review />,
                },
                {
                    path: '/createReview',
                    element: <CreateReview />,
                },
                {
                    path: '/editReview/:id',
                    element: <EditReview />,
                },
            ],
        },
        { element: <Login />, path: '/login' },
        { element: <Signup />, path: '/signup' },
    ]);

    return <RouterProvider router={routers} />;
}

export default App;
