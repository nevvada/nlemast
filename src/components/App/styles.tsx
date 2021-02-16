import styled, { createGlobalStyle } from 'styled-components';

export const StyledGlobal = createGlobalStyle`
  html {
	background-color: #F7F7FF;
  box-sizing: border-box;
	font-family: 'Quicksand', sans-serif;
    font-size: 20px;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
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
    font-weight: normal;
    margin: 0;
    padding: 0;
  }

  a {
    color: #000;
    font-weight: 900;
    text-decoration: none;
  }
`;

export const StyledMain = styled.main`
  max-width: 39em;
  margin: 0 auto;
`;
