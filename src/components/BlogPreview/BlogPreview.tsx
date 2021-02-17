import { Location } from 'history';
import React from 'react';
import { Link } from 'react-router-dom';

import { StyledArticle, StyledDiv } from './styles';

interface Props {
  date: string;
  pathname: Location['pathname'];
  title: string;
}

const BlogPreview: React.FC<Props> = (props) => {
  const { date, pathname, title } = props;

  return (
    <StyledDiv>
      <Link
        to={{
          pathname: `${pathname}/${date}`,
          state: props,
        }}
      >
        <StyledArticle>{title}</StyledArticle>
      </Link>
    </StyledDiv>
  );
};

export default BlogPreview;
