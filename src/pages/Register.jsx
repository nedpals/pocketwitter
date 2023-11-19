import React, { useState } from 'react';
import { pb } from '../client';
import { Link, useNavigate } from 'react-router-dom';
import { ClientResponseError } from 'pocketbase';

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirmation] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleRegister = (e) => {
        e.preventDefault();

        setErrorMessage(null);
        setIsProcessing(true);

        // Handle registration logic here
        // pb.collection('users').create({
        //     username: username,
        //     name: name,
        //     password: password,
        //     passwordConfirm: passwordConfirm,
        // })
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
        //         setName('');
        //         setPassword('');
        //         setPasswordConfirmation('');
        //         setIsProcessing(false);
        //     });
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handlePasswordConfirmationChange = (e) => {
        setPasswordConfirmation(e.target.value);
    }

    if (false) {
        return <Navigate to="/" replace={true} />;
    }

    return (
        <div className="py-4 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold">Register</h1>
            <form onSubmit={handleRegister}>
                <div className="flex flex-col space-y-4 py-4">
                    {/* error message goes here */}
                    {errorMessage && <div className="border rounded-md px-4 py-2 text-white border-red-700 bg-red-600">
                        <p>{errorMessage}</p>
                    </div>}

                    <div className="text-sm flex items-center space-x-2">
                        <span>Already have an account?</span>
                        <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            disabled={isProcessing}
                            className="border rounded-md px-4 py-2"
                            onChange={handleNameChange}
                        />
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

                    <div className="flex flex-col space-y-2">
                        <label htmlFor="passwordConfirm">Confirm password</label>
                        <input
                            type="password"
                            id="passwordConfirm"
                            value={passwordConfirm}
                            disabled={isProcessing}
                            className="border rounded-md px-4 py-2"
                            onChange={handlePasswordConfirmationChange}
                        />
                    </div>

                    <button type="submit" disabled={isProcessing} className="button is-primary self-end">
                        {isProcessing ? 'Registering...' : 'Register'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;