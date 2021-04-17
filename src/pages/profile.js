import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Header from '../components/header';
import UserProfile from '../components/profile';
import { getUserByUsername } from '../services/firebase';
import * as ROUTES from '../constants/routes';

export default function Profile(){
    const { username } = useParams();
    const [userExists, setUserExists] = useState(undefined);
    const { history } = useHistory();
    
    useEffect(() => {
        async function chekUserExistsToLoadProfile(){
            const doesUserExist = await getUserByUsername(username);
        };
    }, []);
    
    return(
        <h1>Hello from Profile!</h1>
    )
}
