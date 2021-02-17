import React from 'react';
import { useLocation } from 'react-router-dom';

import BlogPreview from '../BlogPreview/BlogPreview';

import posts from '../../scribblesPosts/posts';

const Blog: React.FC = () => {
  const { pathname } = useLocation();

  const renderedPosts = posts.map((post, index) => (
    <BlogPreview
      {...post}
      key={index}
      pathname={pathname}
    />
  ));

  return (
    <>
      {renderedPosts}
    </>
  )
};

export default Blog;
