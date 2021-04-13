import React, { useState, useEffect, memo } from 'react';
import Skeleton from 'react-loading-skeleton';
import { getSuggestedProfiles } from '../../services/firebase';

const Suggestions = ({ userId }) => {
  const [profiles, setProfiles] = useState(null);
  
  useEffect(() => {
    async function suggestedProfiles(){}
  }, [])
  
  return(<div></div>);
}

export default Suggestions;
