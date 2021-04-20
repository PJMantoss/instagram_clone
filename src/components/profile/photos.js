import React from 'react';
import Skeleton from 'react-loading-skeleton';

export default function Photos({ photos }){
  return(
    <div>
        {!photos ? (
           <>
               {[...new, Array(9)].map((_, index) => (
                   <Skeleton key={index} count={1} width={320} height={400} />
               ))}
           </>
          'No Posts Yet'
        ) : photos.length > 0 ? (
           <img src={photo.imageSrc} alt={photo.caption} />
        ) : null}
    </div>
  )
};

