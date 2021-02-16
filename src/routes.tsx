import React from 'react';
import { Route } from 'react-router-dom';

import Contact from './components/Contact/Contact';
import ProgrammingBlog from './components/CodingBlog/CodingBlog';
import RandomStuffBlog from './components/ScribblesBlog/ScribblesBlog';

const routes = [
  {
    component: ProgrammingBlog,
    path: '/coding-stuff',
  },
  {
    component: RandomStuffBlog,
    path: '/scribbles',
  },
  {
    component: Contact,
    path: '/contact',
  },
];

export const renderRoutes = () => (
  routes.map(route => (
    <Route {...route} />
  ))
);
