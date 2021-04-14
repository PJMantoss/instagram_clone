import React, { useState, useEffect, memo } from 'react';
import Skeleton from 'react-loading-skeleton';
import SuggestedProfile from './suggested-profile';
import { getSuggestedProfiles } from '../../services/firebase';

const Suggestions = ({ userId }) => {
  const [profiles, setProfiles] = useState([
    {
      docId: '1',
      userDocId: 1,
      username: 'Dali',
      profileId: '2',
      userId: '3'
    }
  ]);
  
  useEffect(() => {
    async function suggestedProfiles(){
      const response = await getSuggestedProfiles(userId);
      setProfiles(response);
    }
    
    if(userId){
       suggestedProfiles()
       }
    
  }, [userId])
  
  return !profiles ? (
               <Skeleton count={1} height={150} className="mt-5" />
           ) : profiles.length > 0 ? (
               //profiles
               <div className="grid">
                   {profiles.map((profile) => (
                       <SuggestedProfile 
                           key={}
                           userDocId={}
                           username={}
                       />
                   ))}
               </div>
           ) : null;
}

export default memo(Suggestions);
