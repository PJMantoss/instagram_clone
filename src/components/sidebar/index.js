import React from 'react';
import { useUser } from '../hooks/use-user.js'

export default function Sidebar(){
    const { docId, userId, following, username, fullName } = useUser();
    
    return(<p>I am the Sidebar</p>)
}
