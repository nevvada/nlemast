import React from 'react';
import { Link } from 'react-router-dom';

import { StyledArticle, StyledDiv } from './styles';

interface Props {
  date: string;
  title: string;
}

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
