import React, { useState, useEffect } from 'react';

export default function Header({
  photosCount,
  followerCount,
  setFollowerCount,
  profile,
  username
}){
  return(
    <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
       <div className="container"></div>
       <div className="flex"></div>
    </div>
  )
};
