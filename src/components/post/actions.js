import React, { useState, useContext } from 'react';
import FirebaseContext from '../../context/firebase';
import UserContext from '../../context/user';

export default function Actions({ docId, totalLikes, likedPhoto, handleFocus }){
  const [toggledLike, setToggledLiked] = useState(likedPhoto);
  const [likes, setLikes] = useState(totalLikes);
  const { firebase, fieldValue } = useContext(FirebaseContext);
  
  const handleToggleLike = async () => {}
  
  return(
    <>
        <div className="flex justify-between p4-">
            <div className="flex">
                <svg></svg>
            </div>
        </div>
    </>
  );
};
