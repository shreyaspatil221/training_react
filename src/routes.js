import Home from './components/Home';
import Login from "./components/Login";

const routes = [
    {
        name: 'Login',
        path: '/',
        element: <Login />
    },
    {
        name: 'User',
        path: '/user',
        element: <Home />
    }
];

export default routes;
