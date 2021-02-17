import React from 'react';
import { useLocation } from 'react-router-dom';

import BlogPreview from '../BlogPreview/BlogPreview';

import codingPosts from '../../posts-coding/posts';
import scribblesPosts from '../../posts-scribbles/posts';

const Blog: React.FC = () => {
  const { pathname } = useLocation();

  const posts = (pathname === '/coding-stuff') ? codingPosts : scribblesPosts;

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
