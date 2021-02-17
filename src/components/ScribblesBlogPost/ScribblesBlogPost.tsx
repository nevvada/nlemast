import Markdown from 'markdown-to-jsx';
import React from 'react';
import { useLocation } from 'react-router-dom';

import { StyledArticle, StyledH4 } from './styles';

const ScribblesBlogPost: React.FC = () => {
  const { state } = useLocation<Post>();
  const { date, markdown, title } = state;

  return (
    <>
      <h1>{title}</h1>
      <StyledArticle>
        <StyledH4>{date}</StyledH4>
        <Markdown>{markdown}</Markdown>
      </StyledArticle>
    </>
  );
};

export default ScribblesBlogPost;
