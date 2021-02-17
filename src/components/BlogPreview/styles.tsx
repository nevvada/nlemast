import styled from 'styled-components';

export const StyledArticle = styled.article`
  font-size: 1.5em;
  padding: 1em;
  text-decoration: underline;

  &:hover {
    border: 1px dashed #000;
    cursor: pointer;
    text-decoration: none;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
