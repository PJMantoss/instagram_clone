import React from 'react';
import Skeleton from 'react-loading-skeleton';
import useFollowedUsersPhotos from '../hooks/use-followed-users-photos.js';

// References
//   - https://www.npmjs.com/package/react-loading-skeleton

export default function Timeline(){
    const { photos } = useFollowedUsersPhotos();
    
    return(
        <div className="container col-span-2">
            {!photos ? (
                <Skeleton key={index} count={1} width={640} height={500} className="mb-5" />
             ) : photos && photos.length > 0 ? (
                 photos.map(photo => 'I will be a photo')
             ) : (
                 <p className="text-center text-2xl">Follow people to see photos</p>
             )};
        </div>
    )
}
