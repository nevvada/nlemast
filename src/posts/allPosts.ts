import codingPosts from './posts-coding-stuff/posts';
import scribblesPosts from './posts-scribbles/posts';

const allPosts = {
  'coding-stuff': {
    ...codingPosts,
  },
  scribbles: {
    ...scribblesPosts,
  },
};

export default allPosts;
