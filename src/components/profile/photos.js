import React from 'react';
import Skeleton from 'react-loading-skeleton';

export default function Photos({ photos }){
  return(
    <div>
        <Skeleton count={9} width={320} height={400} />
        {photos == 0 ? (
          'No Posts Yet'
        ) : (
           photos.map()
        )}
    </div>
  )
};

