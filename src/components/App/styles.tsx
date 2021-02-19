import styled, { createGlobalStyle } from 'styled-components';

import COLORS from '../../constants/colors';

export const StyledGlobal = createGlobalStyle`
  body {
    background-color: #F7F7FF;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    font-family: 'Montserrat', sans-serif;
  }

  ul li {
    margin: 0;
    padding: 0;
    text-indent: 0;
    list-style-type: none;
  }

  a {
    color: ${COLORS['primary']};
    text-decoration: none;
  }
`;

export const StyledMain = styled.main`
  margin: 0 auto;
`;

export const StyledSection = styled.section`
  line-height: 1.5em;
  margin: 0 auto 3em auto;
  max-width: 39em;

  @media only screen and ${BREAKPOINTS['tablet']} {
    margin: 0 2em 3em 2em;
  }
`;

export const StyledDiv = styled.div`
  border-left: 50vw solid transparent;
  border-right: 50vw solid transparent;
  border-top: 50vw solid rgba(0, 0, 0, 0.02);
  height: 0;
  left: 0;
  margin: auto;
  position: fixed;
  right: 0;
  width: 0;
  z-index: -1;
`;
