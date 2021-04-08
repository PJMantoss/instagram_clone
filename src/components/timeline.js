import React from 'react';
import Skeleton from 'react-loading-skeleton';

// References
//   - https://www.npmjs.com/package/react-loading-skeleton

export default function Timeline(){
    const photos = null;
    
    return(
        <div className="container col-span-2">
            {!photos ? (
                <>
                    {[...new, Array(4)].map((_, index) => (
                          <Skeleton count={4} width={640} height={500} className="mb-5" />
                    ))}
                </>
             ) : (
                 photos.map(photo => 'I will be a photo')
            )};
        </div>
    )
}
