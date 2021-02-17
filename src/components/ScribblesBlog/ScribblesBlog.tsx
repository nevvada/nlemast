import React from 'react';

import ScribblesBlogPreview from '../ScribblesBlogPreview/ScribblesBlogPreview';

import posts from '../../scribblesPosts/posts';

const ScribblesBlog: React.FC = () => {
  const renderedPosts =  posts.map((post, index) => {
    return <ScribblesBlogPreview {...post} key={index} />
  })

  return (
    <>
      {renderedPosts}
    </>
  )
};

export default ScribblesBlog;
