import { useState, useContext, useEffect } from 'react';
import UserContext from '../context/user';
import { getUserByUserId } from '..services/firebase';

export default function useUser(){
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(UserContext);
  
  useEffect(() => {
    async function getUserObjByUserId(){
      //query for the user data in the firestore
      const [response] = await getUserByUserId(user.uid); 
    }
    
    if(user && user.id){
      getUserObjByUserId();
    }
  }, []);
  
  return {user: activeUser};
};
