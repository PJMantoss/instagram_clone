import React, { useEffect } from 'react';
import Header from '../components/header.js';
import Timeline from '../components/timeline.js';
import Sidebar from '../components/sidebar/index.js';

export default function Dashboard(){
    useEffect(() => {
        document.title = 'Instagram';
    }, []);

    return(
        <h1>Hello from Dashboard!</h1>
    )
}