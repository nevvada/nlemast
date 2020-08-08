import styled from 'styled-components';

export const StyledIcon = styled.img`
    transition: all 0.2s ease-in-out;
    width: 2rem;

    &:hover {
        transform: scale(1.2);
    }
`;

export const StyledLogoWrapper = styled.div`
	margin: 1rem 0;
    display: flex;
    justify-content: center;

    & > * {
        margin: 0 2rem;
    }
`;

export const StyledMenu = styled.header`
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
