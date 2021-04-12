import React, { useState, useContext } from 'react';
import FirebaseContext from '../../context/firebase';
import UserContext from '../../context/user';

export default function AddComments({ docId, comments, setComments, commentInput }){
  const { firebase, fieldValue } = useContext(FirebaseContext);
  const [ comments, setComments ] = useState('');
  
  const { user: {displayName} } = useContext(UserContext);
  
  const handleSubmitComment = async (e) => {
    e.preventDefault();
    
    setComments([{ displayName, comment }, ...comments]);
    setComments('');
    
    return firebase
           .firestore()
           .collection('photos')
           .doc(docId)
           .update({
                comments: fieldValue.arrayUnion({ displayName, comment })
            })
  }
  
  return(
    <div className="border-t border-gray">
        <form className="flex w-full justify-between border-gray">
            <input
                aria-label="Add a comment"
                type="text"
                autoComplete="off"
                className="text-sm text-gray w-full mr-3"
            />
        </form>
    </div>
  )
}
