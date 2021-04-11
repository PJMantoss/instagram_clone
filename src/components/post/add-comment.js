import React, { useState, useContext } from 'react';
import FirebaseContext from '../../context/firebase';
import UserContext from '../../context/user';

export default function AddComments({ docId, comments, setComments, commentInput }){
  const { firebase, fieldValue } = useContext(FirebaseContext);
  const [ comments, setComments ] = useState('');
  
  const { user: {displayName} } = useContext(UserContext);
  
  return(
    <div></div>
  )
}
