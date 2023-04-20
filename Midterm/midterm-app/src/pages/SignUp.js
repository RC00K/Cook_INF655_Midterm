import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { doc, setDoc, collection } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, fs } from '../firebase';

export default function SignInForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const initialcartvalue = 0;
            const userRef = doc(collection(fs, "users"), userCredential.user.uid);
            const data = {
                Name: name,
                Email: email,
                Cart: initialcartvalue
            }
            setDoc(userRef, data).then(() => {
                setSuccessMsg('User created successfully');
                setName('');
                setEmail('');
                setErrorMsg('');
                setTimeout(() => {
                    setSuccessMsg('');
                    navigate('/signin');
                }, 4000);
            }).catch((error) => {
                setErrorMsg(error.message)
            });
            
          }).catch((error) => {
            setErrorMsg(error.message)
        })
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