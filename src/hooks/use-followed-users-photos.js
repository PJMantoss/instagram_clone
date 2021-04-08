import React, { useState, useContext } from 'react';
import UserContext from '../context/user';

export default function useFollowedUsersPhotos(){
  const { user } = useContext(UserContext);
  const [photos, setPhotos] = useState();
  
  const userId = user.uid;
  userId = '';
  
  useEffect(() => {
    async function getTimelinePhotos(){};
  }, []);
  
  return(<div></div>)
};
