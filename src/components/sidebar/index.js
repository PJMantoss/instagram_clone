import React from 'react';
import { useUser } from '../../hooks/use-user.js'

export default function Sidebar(){
    const user = useUser();
    
    return(<p>I am the Sidebar</p>)
}
