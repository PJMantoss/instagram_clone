import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';

export default function SignUp(){
    const { firebase } = useContext(FirebaseContext);

    //initialize states
    const [username, setUsername] = useState('');
    const [fullName, setFullName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');

    //form validation
    const isInvalid = username === '' || fullName === '' || emailAddress === '' || password === '';

    //set document title
    useEffect(() => {
        document.title = 'Sign Up - Instagram';
    }, []);

    //Event Handler
    const handleSignup = async (e) => {
        e.preventDefault();

        //Call in firebase to handle registration/authentication
        
    }

    return(
        <div className="container flex mx-auto max-w-xs items-center h-screen">
            <div className="flex flex-col">
                <div className="flex flex-col items-center bg-white p-4 border mb-4">
                    <h1 className="flex justify-center w-full">
                        <img src="./images/logo.png" alt="instagram" className="mt-2 w-6/12 mb-4" />
                    </h1>
                    {error && <p className="mb-4 text-xs text-red-500">{error}</p>}

                    <form method="POST">
                        <input 
                            aria-label="Enter your username" 
                            className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2" 
                            type="text"
                            value={username} 
                            placeholder="Username"
                            onChange = {({ target }) => setUsername(target.value.toLowerCase())} 
                        />

                        <input 
                            aria-label="Enter your Full Name" 
                            className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2" 
                            type="text"
                            value={fullName} 
                            placeholder="Full Name"
                            onChange = {({ target }) => setFullName(target.value)} 
                        />

                        <input 
                            aria-label="Enter your email address" 
                            className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2" 
                            type="text"
                            value={emailAddress} 
                            placeholder="Email"
                            onChange = {({ target }) => setEmailAddress(target.value.toLowerCase())} 
                        />

                        <input 
                            aria-label="Enter your password" 
                            className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2" 
                            type="password"
                            value={password} 
                            placeholder="password"
                            onChange = {({ target }) => setPassword(target.value)} 
                        />

                        <button 
                            type="submit" 
                            className={`bg-blue-500 text-white w-full rounded h-8 font-bold ${isInvalid && 'cursor-not-allowed opacity-50'}`}
                            disabled = {isInvalid}
                        >
                            Sign Up
                        </button>
                    </form>
                </div>

                <div className="flex justify-center items-center flex-col w-full bg-white p-4 border">
                    <p className="text-sm">
                        Have an account? {` `}
                        <Link to={ROUTES.LOGIN} className="font-bold text-blue">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}