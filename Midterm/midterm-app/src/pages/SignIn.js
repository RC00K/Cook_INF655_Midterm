import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                    Welcome Back
                </h1>
                <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                    Are you ready to experience graphics like never before? 
                    Sign in to your account to start your journey.
                </p>
                <form
                    action="#"
                    className="mt-6 mb-0 space-y-4 rouned-lg p-4 shadow-lg sm:p-6 lg:p-8"
                >
                    <p className="text-center text-lg font-medium">Sign in to your account</p>
                    <div>
                        <label for="email" className="sr-only">Email</label>
                        <div className="relative">
                            <input
                                type="email"
                                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                placeholder="Email"
                            />
                        </div>
                    </div>

                    <div>
                        <label for="password" className="sr-only">Password</label>
                        <div className="relative">
                            <input
                                type="password"
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
    );
}

export default SignIn;