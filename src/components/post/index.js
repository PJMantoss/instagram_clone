import React, { useRef } from 'react';
import Actions from '/actions.js';
import AddComments from './add-comments.js';
import Image from './image.js';
import Header from './header.js';
import Footer from './footer.js';

export default function Post({ content }){
  return(
    <div className="bg-white border rounded col-span-4 mb-16">
        <Image src={content.imageSrc} caption={content.caption} />
        <Actions />
        <Footer username={content.username} caption={content.caption} />
    </div>
  );
}
