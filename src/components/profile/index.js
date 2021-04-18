import React, { useReducer, useEffect } from 'react';
import Header from './header';
import Photos from './photos';

const reducer = (state, newState) => ({ ...state, ...newState });

export default function Profile({ username }){
  return(
    <>
        <Header />
        <Photos />
    </>
  )
}
