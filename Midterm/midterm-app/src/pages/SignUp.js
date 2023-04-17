import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../components/Auth/AuthContext';

export default function SignInForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const { createUser } = UserAuth();

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = { name, email, password, confirmPassword };
        console.log(data);
        try {
            await createUser(email, password).then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                navigate('/home');
            });
        } catch (err) {
            console.log(err);
        }
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    const renderForm = () => {
        return (
            <>
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                            Get Started Today
                        </h1>
                        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                            Are you ready to experience graphics like never before?
                            Sign up for a free account to experience the
                            best graphics on the market.
                        </p>
                        <form
                            onSubmit={onSubmit}
                            className="mt-6 mb-0 space-y-4 rouned-lg p-4 shadow-lg sm:p-6 lg:p-8"
                        >
                            <p className="text-center text-lg font-medium">Create your account</p>
                            <div>
                                <label for="name" className="sr-only">Full Name</label>
                                <div className="relative">
                                    <input
                                        description="Full Name"
                                        type="name"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                        placeholder="Full Name"
                                    />
                                </div>
                            </div>

                            <div>
                                <label for="email" className="sr-only">Email</label>
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
                                <label for="password" className="sr-only">Password</label>
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

                            <div>
                                <label for="password" className="sr-only">Confirm Password</label>
                                <div className="relative">
                                    <input
                                        description="Confirm Password"
                                        type="password"
                                        id="password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                        placeholder="Confirm Password"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                            >
                                Sign Up
                            </button>

                            <p className="text-center text-sm text-gray-500">
                                Already Have An Account?
                                <Link to="/signin" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    {' '}Sign In
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