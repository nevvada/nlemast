import styled from 'styled-components';

export const StyledHeader = styled.header`
	align-items: center;
    background: '#333';
    display: flex;
	flex-direction: column;
	height: 10em;
    text-align: center;

    & > * {
        margin: 0.5rem 0;
    }
`;

export const StyledTitle = styled.h1`
    font-size: 3em;
    
    & > a {
        color: black;
        text-decoration: none;
    }
`;
