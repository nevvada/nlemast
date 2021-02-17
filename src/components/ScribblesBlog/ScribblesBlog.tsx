import React from 'react';

import ScribblesBlogPreview from '../ScribblesBlog/ScribblesBlogPreview';

import posts from '../../scribblesPosts/posts';

const ScribblesBlog: React.FC = () => {
  const renderedPosts =  posts.map(post => {
    return <ScribblesBlogPreview {...post} />
  })

  return (
    <>
      {renderedPosts}
    </>
  )
};

export default ScribblesBlog;
