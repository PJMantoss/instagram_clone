import React, { useState, useEffect, memo } from 'react';
import Skeleton from 'react-loading-skeleton';
import SuggestedProfile from './suggested-profile';
import { getSuggestedProfiles } from '../../services/firebase';

const Suggestions = ({ userId }) => {
  const [profiles, setProfiles] = useState([
    {
      docId: '1',
      userDocId: 1,
      username: 'dali',
      profileId: '2',
      userId: '3'
    },
    {
      docId: '2',
      userDocId: 1,
      username: 'orwell',
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
               <div className="flex flex-col">
                   <div className="flex items-center align-items justify-between mb-2">
                       <p className="font-bold text-gray text-sm">Suggestions for you</p>
                   </div>
                   <div className="grid">
                       {profiles.map((profile) => (
                           <SuggestedProfile 
                               key={profile.docId}
                               userDocId={profile.docId}
                               username={profile.username}
                               profileId={profile.userId}
                               userId={userId}
                           />
                       ))}
                   </div>
               </div>
           ) : null;
}

export default memo(Suggestions);
