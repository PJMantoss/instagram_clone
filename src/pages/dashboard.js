import React, { useEffect } from 'react';
import Header from '../components/header.js';
import Timeline from '../components/timeline.js';
import Sidebar from '../components/sidebar/index.js';

export default function Dashboard(){
    useEffect(() => {
        document.title = 'Instagram';
    }, []);

    return(
        <div class="bg-gray-200">
            <Header />
            <div></div>
        </div>
    )
}