import React, { useState, useContext } from 'react';
import UserContext from '../context/user';

export default function useFollowedUsersPhotos(){
  const { user.uid } = useContext(UserContext);
  const [photos, setPhotos] = useState();
  
  return(<div></div>)
};
