import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ username }){
  return(
    <div className="flex border-b h-4 p-4 py-8">
        <p className="font-bold">{username}</p>
    </div>
  )
};
