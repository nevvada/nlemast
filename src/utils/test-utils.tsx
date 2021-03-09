import React from 'react';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';

import PostsContext from '../PostsContext';

import posts from '../posts/allPosts';

type RenderWithRouter = (
  component: Router,
  arg: {
    route: string;
    history: ReturnType<typeof createMemoryHistory>;
  }
) => any;

export const renderWithRouter: RenderWithRouter = (
  component,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  },
) => ({
  ...render(
    <PostsContext.Provider value={posts}>
      <Router history={history}>
        {component}
      </Router>
    </PostsContext.Provider>,
  ),
  history,
});
