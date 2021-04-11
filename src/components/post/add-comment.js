import React, { useState, useContext } from 'react';
import FirebaseContext from '../../context/firebase';
import UserContext from '../../context/user';

export default function AddComments({ docId, comments, setComments, commentInput }){
  const { firebase, fieldValue } = useContext(FirebaseContext);
  const [ comments, setComments ] = useState('');
  
  const { user: {displayName} } = useContext(UserContext);
  
  const handleSubmitComment = async (e) => {
    e.preventDefault();
    
    setComments([{ displayName, comments }, ...comments]);
    setComments('');
    
    return await firebase
           .firestore()
           .collection('photos')
           .doc(docId)
           .update({
                comments: fieldValue.arrayUnion({ displayName, comment })
            })
  }
  
  return(
    <div></div>
  )
}
