import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

import BlogPreview from '../BlogPreview/BlogPreview';

import PostsContext from '../../PostsContext';

interface Props extends RouteComponentProps<Params> {}

const renderBlogPreviews = (posts: Posts) => (
  Object.entries(posts).map(([date, post]) => (
    <BlogPreview {...post} key={date} />
  ))
);

const Blog: React.FC<Props> = () => {  
  const { blogType } = useParams<Params>();

  const allPosts = useContext(PostsContext);
  const blogTypePosts = allPosts[blogType];

  return (
    <ul>
      {renderBlogPreviews(blogTypePosts)}
    </ul>
  );
};

export default Blog;
