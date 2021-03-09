import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import {
  StyledH1,
  StyledH2,
  StyledHeader,
  StyledLink,
  StyledNav,
} from './styles';

const Header: React.FC = () => {
  const { pathname } = useLocation();

  const homePath = '/';
  const aboutPath = '/about';
  const codingStuffPath = '/coding-stuff';
  const scribblesPath = '/scribbles';

  return (
    <StyledHeader>
      <StyledH1>
        <Link to={homePath}>nathan le master</Link>
      </StyledH1>
      <StyledH2>software engineer &middot; writer &middot; very online person</StyledH2>
      <hr />
      <StyledNav>
        <StyledLink
          active={pathname.match(aboutPath) ? 1 : 0}
          to={aboutPath}
        >
          about
        </StyledLink>
        <StyledLink
          active={pathname.match(codingStuffPath) ? 1 : 0}
          to={codingStuffPath}
        >
          coding stuff
        </StyledLink>
        <StyledLink
          active={pathname.match(scribblesPath) ? 1 : 0}
          to={scribblesPath}
        >
          scribbles
        </StyledLink>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
