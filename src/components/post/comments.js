import React from 'react';
import { Link } from 'react-router-dom';
import AddComments from './add-comments.js';

export default function Comments({ docId, comments: allComments, posted, commentInput }){
  const [comments, setComments] = useState(allComments);
  
  return(
    <div></div>
  )
};
