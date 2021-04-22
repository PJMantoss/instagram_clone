import React, { useState, useEffect } from 'react';
import useuser from '../../hooks/use-user';

export default function Header({
  photosCount,
  followerCount,
  setFollowerCount,
  username,
  profile: { docId: profileDocId, userId: profileUserId, fullName, following }
}){
  
  const { user } = useUser();
  const [isFollowingProfile, setIsFoloowingProfile] = useState(false);
  const activeBtnFollow = user.username && user.username !== username;
  
  return(
    <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
       <div className="container flex justify-center">
           <img
               className="rounded-full h-40 w-40 flex"
               alt={`${username} profile picture`}
               src={`/images/avatars/${username}.jpg`}
           />
       </div>
    
       <div className="flex items-center justify-center flex-col col-span-2">
           <div className="container flex items-center">
               <p className="text-2xl mr-4">{username}</p>
               {activeBtnFollow && (
                   <button
                       className="bg-blue-500 font-bold text-sm rounded text-white w-20 h-8"
                       type="button"
                       onClick={() => console.log('I am a button')}
                   >
                       {isFollowingProfile ? 'Unfollow' : 'Follow'}
                   </button>
               )}
           </div>
       </div>
    </div>
  )
};
