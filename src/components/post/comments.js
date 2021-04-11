import React from 'react';
import { Link } from 'react-router-dom';
import AddComments from './add-comments.js';

export default function Comments({ docId, comments: allComments, posted, commentInput }){
  const [comments, setComments] = useState(allComments);
  
  return(
    <div className="p-4 pt-1 pb-4">
        {comments.length >= 3 && (
          <p className="text-sm text-gray-500 mb-1 cursor-pointer">
              View all {comments.length} comments
          </p>
        )}
        {comments.slice(0, 3).map(item => (
          <p key={} className={}>
              <Link to{}></Link>
          <p>
        ))}
    </div>
  )
};
