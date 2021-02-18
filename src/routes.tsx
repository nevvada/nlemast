import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

import About from './components/About/About';
import Blog from './components/Blog/Blog';
import BlogPost from './components/BlogPost/BlogPost';

const routes: RouteProps[] = [
  {
    component: BlogPost,
    path: '/:blogType/:date'
  },
  {
    component: Blog,
    path: '/:blogType',
  },
  {
    component: About,
    path: '/about',
  },
];

export const renderRoutes = () => (
  routes.map(route => (
    <Route {...route} />
  ))
);
