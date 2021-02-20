import React, { lazy } from 'react';
import { Route, RouteProps } from 'react-router-dom';

// import About from './components/About/About';
// import Blog from './components/Blog/Blog';
// import BlogPost from './components/BlogPost/BlogPost';
// import Home from './components/Home/Home';

const About = lazy(() => import('./components/About/About'));
const Blog = lazy(() => import('./components/Blog/Blog'));
const BlogPost = lazy(() => import('./components/BlogPost/BlogPost'));
const Home = lazy(() => import('./components/Home/Home'));

const routes: RouteProps[] = [
  {
    component: About,
    path: '/about',
  },
  {
    component: BlogPost,
    path: '/:blogType/:date'
  },
  {
    component: Blog,
    path: '/:blogType',
  },
  {
    component: Home,
    path: '/',
  },
];

export const renderRoutes = () => (
  routes.map(route => (
    <Route {...route} />
  ))
);
