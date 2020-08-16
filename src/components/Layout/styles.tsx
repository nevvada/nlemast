import { createGlobalStyle } from 'styled-components';

export const StyledGlobal = createGlobalStyle`
    html {
		background-color: #eee8d5;
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
        font-weight: normal;
        margin: 0;
        padding: 0;
    }

    a {
        color: #483D8B;
        font-weight: 900;
    }
`;
