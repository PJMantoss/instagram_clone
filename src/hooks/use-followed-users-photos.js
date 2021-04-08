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
      
      if(){};
    };
    
    getTimelinePhotos();
  }, [userId]);
  
  return { photos };
};
