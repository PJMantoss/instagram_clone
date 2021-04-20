import React from 'react';
import Skeleton from 'react-loading-skeleton';

export default function Photos({ photos }){
  return(
    <div className="h-16 border-t border-gray mt-12 pt-4">
        {!photos ? (
           <>
               {[...new, Array(9)].map((_, index) => (
                   <Skeleton key={index} count={1} width={320} height={400} />
               ))}
           </>
        ) : photos.length > 0 ? (
          photos.map(photo => (
            <img src={photo.imageSrc} alt={photo.caption} />
          ))
        ) : null}
        
        {!photos || (photos.length === 0 && <p className="text-center text-2xl">No Photos Yet</p>)}
    </div>
  )
};

