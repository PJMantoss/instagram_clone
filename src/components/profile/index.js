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
  const [{}] = useReducer()
  
  return(
    <>
        <Header />
        <Photos />
    </>
  )
}
