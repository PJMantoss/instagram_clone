import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../context/user';

export default function useFollowedUsersPhotos(){
  const { user: {uid: userId = ""} } = useContext(UserContext);
  const [photos, setPhotos] = useState(null);
  
  const userId = user.uid;
  userId = '';
  
  useEffect(() => {
    async function getTimelinePhotos(){};
    
    getTimelinePhotos();
  }, [userId]);
  
  return { photos };
};
