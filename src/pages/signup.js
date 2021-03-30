import React, { useEffect, useState, useContext } from 'react';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';

export default function SignUp(){
    return(
        <div className="container flex mx-auto max-w-xs items-center h-screen">
            <div className="flex flex-col">
                <div className="flex flex-col items-center bg-white p-4 border mb-4">
                    <h1 className="flex justify-center w-full">
                        <img src="./images/logo.png" alt="instagram" className="mt-2 w-6/12 mb-4" />
                    </h1>
                    {error && <p className="mb-4 text-xs text-red-500">{error}</p>}

                    <form onSubmit={handleChange} method="POST">
                        <input 
                            aria-label="Enter your username" 
                            className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2" 
                            type="text"
                            //value={emailAddress} 
                            placeholder="Username"
                            //onChange = {({ target }) => setEmailAddress(target.value)} 
                        />

                        <input 
                            aria-label="Enter your full Name" 
                            className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2" 
                            type="text"
                            //value={emailAddress} 
                            placeholder="Full Name"
                            //onChange = {({ target }) => setEmailAddress(target.value)} 
                        />

                        <input 
                            aria-label="Enter your email" 
                            className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2" 
                            type="text"
                            //value={emailAddress} 
                            placeholder="Email"
                            //onChange = {({ target }) => setEmailAddress(target.value)} 
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}