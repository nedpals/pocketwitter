import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { pb } from '../client';
import { ClientResponseError } from 'pocketbase';

const Login = () => {
    const navigate = useNavigate('/');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsProcessing(true);
        setErrorMessage(null);

        // pb.collection('users').authWithPassword(username, password)
        //     .then(() => {
        //         navigate('/', { replace: true });
        //     })
        //     .catch((err) => {
        //         if (err instanceof ClientResponseError) {
        //             setErrorMessage(err.message);
        //         }
        //     })
        //     .finally(() => {
        //         // Clear the form
        //         setUsername('');
        //         setPassword('');
        //         setIsProcessing(false);
        //     });
    };

    if (false) {
        return <Navigate to="/" replace={true} />;
    }

    return (
        <div className="py-4 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold">Login</h1>

            <form onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-4 py-4">
                    {/* error message goes here */}
                    {errorMessage && <div className="border rounded-md px-4 py-2 text-white border-red-700 bg-red-600">
                        <p>{errorMessage}</p>
                    </div>}

                    {/* dont have an account */}
                    <div className="text-sm">
                        <p>Don't have an account? <Link to="/register" className="text-blue-600">Register</Link></p>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            disabled={isProcessing}
                            className="border rounded-md px-4 py-2"
                            onChange={handleUsernameChange}
                        />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            disabled={isProcessing}
                            className="border rounded-md px-4 py-2"
                            onChange={handlePasswordChange}
                        />
                    </div>

                    <button type="submit" disabled={isProcessing} className="button is-primary self-end">
                        {isProcessing ? 'Logging in...' : 'Login'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
