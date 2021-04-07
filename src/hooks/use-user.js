import { useState, useContext, useEffect } from 'react';
import UserContext from '../context/user';

export default function useUser(){
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(UserContext);
  
  useEffect(() => {}, []);
  
  return {user: activeUser};
};
