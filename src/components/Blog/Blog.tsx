import React, { useContext } from 'react';
import { RouteComponentProps, useParams } from 'react-router-dom';

import BlogPreview from '../BlogPreview/BlogPreview';
import NotFound from '../NotFound/NotFound';

import PostsContext from '../../PostsContext';

import { StyledUl } from './styles';

type Props = RouteComponentProps<Params>;

type RenderBlogPreviews = (posts: Post[]) => JSX.Element[];

export const renderBlogPreviews: RenderBlogPreviews = (posts = []) => (
  Object.entries(posts).map(([date, post]) => (
    <BlogPreview {...post} key={date} />
  ))
);

const Blog: React.FC<Props> = () => {
  const { blogType } = useParams<Params>();

  const allPosts = useContext(PostsContext);
  const blogTypePosts = allPosts[blogType];

  return (
    <StyledUl>
      {
        blogTypePosts
          ? renderBlogPreviews(blogTypePosts)
          : <NotFound />
      }
    </StyledUl>
  );
};

export default Blog;
