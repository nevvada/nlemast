import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import ScribblesBlogPost from '../ScribblesBlogPost/ScribblesBlogPost';

interface Props {
  date: string;
  title: string;
}

const StyledArticle = styled.article`
  &:hover {
    border: 1px dashed #000;
    cursor: pointer;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const ScribblesBlogPreview: React.FC<Props> = (props) => {
  return (
    <StyledDiv>
      <Link
        to={{
          pathname: `scribbles/${props.date}`,
          state: props,
        }}
      >
        <StyledArticle>{props.title}</StyledArticle>
      </Link>
    </StyledDiv>
  );
};

export default ScribblesBlogPreview;
