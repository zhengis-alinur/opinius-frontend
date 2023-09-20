import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/Layout';
import CreateReview from './pages/CreateReview';
import EditReview from './pages/EditReview';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Review from './pages/Review';
import Search from './pages/Search';
import Signup from './pages/Singup';
import { useAppSelector } from './redux/hooks';
import { selectMode } from './redux/selectors';

function App() {
    const darkMode = useAppSelector(selectMode);
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
                    path: '/profile/:id',
                    element: <Profile />,
                },
                {
                    path: '/review/:id',
                    element: <Review />,
                },
                {
                    path: '/createReview/:userId',
                    element: <CreateReview />,
                },
                {
                    path: '/editReview/:id',
                    element: <EditReview />,
                },
                {
                    path: '/favorites',
                    element: <Favorites />,
                },
                {
                    path: '/search/:keyword',
                    element: <Search />,
                },
            ],
        },
        { element: <Login />, path: '/login' },
        { element: <Signup />, path: '/signup' },
    ]);

    return (
        <div className={`${darkMode && 'dark'} text-primary  bg-bg dark:dark`}>
            <RouterProvider router={routers} />
        </div>
    );
}

export default App;
