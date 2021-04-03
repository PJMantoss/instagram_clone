import React, { useEffect } from 'react';
import Header from '../components/header';
import Timeline from '../components/timeline';
import Sidebar from '../components/sidebar';

export default function Dashboard(){
    useEffect(() => {
        document.title = 'Instagram';
    }, []);
    
    return(
        <h1>Hello from Dashboard!</h1>
    )
}