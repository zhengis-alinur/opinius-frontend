import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import Review from './pages/Review';
import Signup from './pages/Signup';

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
                    path: '/signup',
                    element: <Signup />,
                },
                {
                    path: '/review/:id',
                    element: <Review />,
                },
            ],
        },
    ]);

    return <RouterProvider router={routers} />;
}

export default App;
