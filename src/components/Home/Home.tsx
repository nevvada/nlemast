import React from 'react';
import { Link } from 'react-router-dom';

import { StyledH1, StyledH2, StyledHeader, StyledNav } from './styles';

const Home: React.FC = () => (
  <>
    <StyledHeader>
      <StyledH1><Link to="/">nathan le master</Link></StyledH1>
      <StyledH2>software engineer &middot; writer &middot; very online person</StyledH2>
      <hr></hr>
      <StyledNav>
        <Link to="/about">about</Link>
        <Link to="/coding-stuff">coding stuff</Link>
        <Link to="/scribbles">scribbles</Link>
      </StyledNav>
    </StyledHeader>
  </>
);

export default Home;
