import React, { useState, useContext } from 'react';
import FirebaseContext from '../../context/firebase';
import UserContext from '../../context/user';

export default function Actions({ docId, totalLikes, likedPhoto, handleFocus }){
  const [toggledLike, setToggledLiked] = useState(likedPhoto);
  const [likes, setLikes] = useState(totalLikes);
  
  return(
    <>
        <div className="flex justify-between p4-">
            <div className=""></div>
        </div>
    </>
  );
};
