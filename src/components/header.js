import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';

export default function Header(){
    const { firebase } = useContext(FirebaseContext);
    const user = {};
    
    return(
        <header className="h-16 bg-white border-b mb-8">
            <div className="container mx-auto max-width-lg h-full">
                <div className="flex justify-between h-full">
                    <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
                        <h1>
                            <Link to={ROUTES.DASHBOARD} aria-label="Dashboard">
                                <img src="images/logo.png" alt="Instagram" className="mt-2 w-6/12" />
                            </Link>
                        </h1>
                    </div>
                    <div className="text-gray text-center flex items-center align-items">
                        {user ? (
                             <></>
                        ) : (
                            <>
                                <Link to={ROUTES.LOGIN}>
                                    <Button 
                                        type="button" 
                                        className="bg-blue font-bold text-sm rounded text-white w-20 h-8"
                                    >
                                    Log In
                                    </Button>
                                </Link>
                                <Link to={ROUTES.SIGNUP}>
                                    <Button 
                                        type="button" 
                                        className="font-bold text-sm rounded text-blue w-20 h-8"
                                    >
                                    Sign Up
                                    </Button>
                                </Link>
                            </>
                          )}
                    </div>
                </div>
            </div>
        </header>
    )
}
