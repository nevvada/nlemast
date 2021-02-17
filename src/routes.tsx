import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

import About from './components/About/About';
import Blog from './components/Blog/Blog';
import BlogPost from './components/BlogPost/BlogPost';

const routes: RouteProps[] = [
  {
    render: () => <BlogPost />,
    path: '/coding-stuff/:date'
  },
  {
    component: Blog,
    path: '/coding-stuff',
  },
  {
    render: () => <BlogPost />,
    path: '/scribbles/:date'
  },
  {
    component: Blog,
    path: '/scribbles',
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
