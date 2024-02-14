// import { lazy } from 'react';

import Home from './components/Home';
import Login from "./components/Login";
import UserList from "./components/UsersList";
// const Home = lazy(() => import('./components/Home'));
// const Login = lazy(() => import('./components/Login'));
// const UserList = lazy(() => import('./components/UsersList'));

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
    },
    {
        name: 'UserList',
        path: '/userlist',
        element: <UserList />
    }
];

export default routes;