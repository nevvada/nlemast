import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

import About from './components/About/About';
import ProgrammingBlog from './components/CodingBlog/CodingBlog';
import RandomStuffBlog from './components/ScribblesBlog/ScribblesBlog';
import ScribblesBlogPost from './components/ScribblesBlogPost/ScribblesBlogPost';

const routes: RouteProps[] = [
  {
    component: ProgrammingBlog,
    path: '/coding-stuff',
  },
  {
    render: () => <ScribblesBlogPost />,
    path: '/scribbles/:date'
  },
  {
    component: RandomStuffBlog,
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
