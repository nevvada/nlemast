import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import {
  StyledDateSpan,
  StyledDiv,
  StyledLi,
  StyledTitleSpan,
} from './styles';

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
        <StyledLi>
          <StyledTitleSpan>{title}</StyledTitleSpan>
          <StyledDateSpan>{date}</StyledDateSpan>
        </StyledLi>
      </Link>
    </StyledDiv>
  );
};

export default BlogPreview;
