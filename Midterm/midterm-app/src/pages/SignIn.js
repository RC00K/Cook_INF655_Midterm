import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export default function SignInForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        const data = { email };
        console.log(data);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                setSuccessMsg('Signed in successfully');
                setEmail('');
                setPassword('');
                setErrorMsg('');
                setTimeout(() => {
                    setSuccessMsg('');
                    navigate('/');
                }, 4000);
            })
            .catch((error) => {
                console.log(error.message)
                if (error.message === 'Firebase: Error (auth/invalid-email).') {
                    setErrorMsg('Please fill in all required fields');
                }
                if (error.message === 'Firebase: Error (auth/user-not-found).') {
                    setErrorMsg('Email not found');
                }
                if (error.message === 'Firebase: Error (auth/wrong-password).') {
                    setErrorMsg('Incorrect password');
                }
            });
    };

    const renderForm = () => {
        return (
            <>
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                            Welcome Back
                        </h1>
                        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                            Are you ready to experience graphics like never before? 
                            Sign in to your account to start your journey.
                        </p>
                        {successMsg && 
                        <>
                            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                                <strong className="font-bold">Success! </strong>
                                <span className="block sm:inline">{successMsg}</span>
                            </div>
                        </>}
                        {errorMsg &&
                        <>
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                <strong className="font-bold">Error! </strong>
                                <span className="block sm:inline">{errorMsg}</span>
                            </div>
                        </>}
                        <br />
                        <form
                            onSubmit={onSubmit}
                            className="mt-6 mb-0 space-y-4 rouned-lg p-4 shadow-lg sm:p-6 lg:p-8"
                        >
                            <p className="text-center text-lg font-medium">Sign in to your account</p>
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <div className="relative">
                                    <input
                                        description="Email"
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                        placeholder="Email"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="sr-only">Password</label>
                                <div className="relative">
                                    <input
                                        description="Password"
                                        type="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                        placeholder="Password"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                            >
                                Sign In
                            </button>

                            <p className="text-center text-sm text-gray-500">
                                No Account?
                                <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    {' '}Sign Up
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </>
        );
    };

    return <div>{renderForm()}</div>;
}