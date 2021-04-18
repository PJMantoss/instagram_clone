import React, { useReducer, useEffect } from 'react';
import Header from './header';
import Photos from './photos';

const reducer = (state, newState) => ({ ...state, ...newState });
const initialState = {
  profile: {},
  photosCollection: [],
  followerCount
}

export default function Profile({ username }){
  const [{ profile, photosCollection, followerCount }, dispatch] = useReducer(reducer, initialState);
  
  //think about caching here in localstorage so we don't make a network call we have already made previously (task)
  useEffect(() => {}, [username]);
  
  return(
    <>
        <Header />
        <Photos />
    </>
  )
}
