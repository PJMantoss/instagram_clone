import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SuggestedProfile({ userDocId, username, profileId, userId }){
  const [followed, setFollowed] = useState(false);
  
  return !followed ? (
          <div className="flex flex-row items-center">
              <img />
              <Link></Link>
          </div>
      ) : null;
};
