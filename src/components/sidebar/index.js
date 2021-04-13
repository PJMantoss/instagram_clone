import React from 'react';
import { useUser } from '../../hooks/use-user.js';
import User from './user';

export default function Sidebar(){
    const { user: { docId, userId, following, username, fullName } } = useUser();
    
    return(
        <div>
            <User username={username} fullName={fullName} />
        </div>
    )
}
