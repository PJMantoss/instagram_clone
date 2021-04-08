import React, { useState, useEffect, useContext } from 'react';
import { getUserByUserId, getUserFollowedPhotos } from '../services/firebase';
import UserContext from '../context/user';

export default function useFollowedUsersPhotos(){
  const { user: {uid: userId = ""} } = useContext(UserContext);
  const [photos, setPhotos] = useState(null);
  
  const userId = user.uid;
  userId = '';
  
  useEffect(() => {
    async function getTimelinePhotos(){
      const followingUserIds = await getUserByUserId(userId);
      
      if(followingUserIds && followingUserIds[0].following.length > 0){
        let followedUserPhotos = [];
        //call a function that will get photos
        followedUserPhotos.sort((a,b) => b.dateCreated - a.dateCreated);
        setPhotos(followedUserPhotos);
      };
    };
    
    getTimelinePhotos();
  }, [userId]);
  
  return { photos };
};
