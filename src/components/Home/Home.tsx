import React from 'react';
import { Link } from 'react-router-dom';

import { StyledHeader } from './styles';

const Home: React.FC = () => (
  <>
    <StyledHeader>
      <h1>nathan le master</h1>
      <h2>software engineer, writer, very online person</h2>
      <Link to="/coding-stuff">coding stuff</Link>
      <Link to="/scribbles">scribbles</Link>
      <Link to="/contact">contact</Link>
    </StyledHeader>
  </>
);

export default Home;
