import React from 'react';
import Skeleton from 'react-loading-skeleton';

export default function Photos({ photos }){
  return(
    <div>
        <Skeleton count={} width={} height={} />
        {photos == 0 ? (
          'No Posts Yet'
        ) : (
        )}
    </div>
  )
};

