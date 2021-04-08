import React, { useState, useEffect, useContext } from 'react';
import { getUserByUserId, getUserFollowedPhotos } from '../services/firebase';
import UserContext from '../context/user';

export default function useFollowedUsersPhotos(){
  const { user: {uid: userId = ""} } = useContext(UserContext);
  const [photos, setPhotos] = useState(null);
  
  useEffect(() => {
    async function getTimelinePhotos(){
      const followingUserIds = await getUserByUserId(userId);
      
      if(followingUserIds && followingUserIds[0].following.length > 0){
        const followedUserPhotos = await getUserFollowedPhotos(userId, followingUserIds[0].following);
        
        followedUserPhotos.sort((a,b) => b.dateCreated - a.dateCreated);
        setPhotos(followedUserPhotos);
      };
    };
    
    getTimelinePhotos();
  }, [userId]);
  
  return { photos };
};
