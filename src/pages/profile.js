import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Header from '../components/header';
import UserProfile from '../components/profile';
import * as ROUTES from '../constants/routes';

export default function Profile(){
    return(
        <h1>Hello from Profile!</h1>
    )
}
