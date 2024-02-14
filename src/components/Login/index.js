import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth';

export const Login = () => {
    const auth = useAuth();
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState(null);
    const [userError, setUserError] = useState(null);
    const yourDomain = 'http://localhost:3000';

    const createUser = async () => {
        const payload = { username, password }
        try {
            const response = await axios.post(`${yourDomain}/users`, payload);
            if (response.data.username) {
                setUserData(response.data);
                auth.login(response.data.username);
                navigate('/user')
            }
            // auth.login(username);
            // navigate('/user')
        } catch (error) {
            console.log("Error", error);
            setUserError(error);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createUser();
        setUsername('');
        setPassword('');
    };

    return (
        <form onSubmit={handleSubmit} className="login-form container mt-5 w-50">
            <h2 className='p-2'>Login</h2>
            <div className="form-group d-flex p-2 justify-content-between">
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div className="form-group d-flex p-2 justify-content-between">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary m-2">
                Login
            </button>
            {userData && <div className='p-2'>Logged In Success for - {userData?.username}</div>}
            {userError && <div className='p-2'>Error message - {userError?.message}</div>}
        </form>
    );
};

export default Login;