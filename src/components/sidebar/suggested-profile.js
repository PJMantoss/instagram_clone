import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SuggestedProfile({ userDocId, username, profileId, userId }){
  const [followed, setFollowed] = useState(false);
  
  return !followed ? (
          <div className="flex flex-row items-center align-items justify-between">
              <img
                  className="rounded-full w-8 flex mr-3"
                  src={`/images/avatars/${username}.jpg`}
                  alt={}
              />
              <Link></Link>
          </div>
      ) : null;
};
