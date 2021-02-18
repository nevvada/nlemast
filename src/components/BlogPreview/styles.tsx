import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLi = styled.li`
  display: flex;
  font-size: 1.5em;
  justify-content: space-around;
  padding: 1em;

  &:hover {
    border: 1px dashed #000;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
  }
`;

export const StyledSpan = styled.span`
  max-width: 75%;
`;
