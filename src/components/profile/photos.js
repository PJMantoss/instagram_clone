import React from 'react';
import Skeleton from 'react-loading-skeleton';

export default function Photos({ photos }){
  return(
    <div>
        {!photos ? (
           <>
               {[...new, Array(9)].map((_, index) => (
                   <Skeleton count={9} width={320} height={400} />
               ))}
           </>
          'No Posts Yet'
        ) : photos.length > 0 ? (
           photos.map(photo => photo.docId)
        )}
    </div>
  )
};

