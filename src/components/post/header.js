import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ username }){
  return(
    <div className="flex border-b h-4 p-4 py-8">
        <div className="flex items-center">
            <Link to={`./p/${username}`}>
                <img src{`./images/avatars/${username}.jpg`} alt={username} />
                <p className="font-bold">{username}</p>
            </Link>
        </div>
    </div>
  )
};
