import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { StyledLi, StyledDiv } from './styles';

interface Props {
  date: string;
  title: string;
}

const BlogPreview: React.FC<Props> = ({ date, title }) => {
  const { pathname } = useLocation();

  return (
    <StyledDiv>
      <Link
        to={`${pathname}/${date}`}
      >
        <StyledLi>{title}</StyledLi>
      </Link>
    </StyledDiv>
  );
};

export default BlogPreview;
