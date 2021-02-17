import React from 'react';
import { Route } from 'react-router-dom';

import About from './components/About/About';
import ProgrammingBlog from './components/CodingBlog/CodingBlog';
import RandomStuffBlog from './components/ScribblesBlog/ScribblesBlog';
import ScribblesBlogPost from './components/ScribblesBlogPost/ScribblesBlogPost';

const routes = [
  {
    component: ProgrammingBlog,
    path: '/coding-stuff',
  },
  {
    component: ScribblesBlogPost,
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
