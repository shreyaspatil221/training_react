import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../src/auth';
import routes from './routes';

export const Navigation = () => {
    return (
        <div className='p-2'>
            {routes?.map((route) => (
                <Link to={route.path} className='p-2' key={route.path}>{route.name}</Link>
            ))}
        </div>
    )
};

export const Layout = () => {

    return (
        <AuthProvider>
            <Navigation />
            <Routes>
                {routes?.map((route) => (
                    <Route path={route.path} element={route.element} key={route.path} />
                ))}
            </Routes>
        </AuthProvider>
    )
}

export default Layout;
