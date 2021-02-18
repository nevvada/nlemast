import Markdown from 'markdown-to-jsx';
import React from 'react';
import { useLocation } from 'react-router-dom';

import Anchor from '../Anchor/Anchor';
import Image from '../Image/Image';

import { StyledArticle, StyledH4 } from './styles';

const BlogPost: React.FC = () => {
  const { state } = useLocation<Post>();
  const { date, markdown, title } = state;

  return (
    <>
      <h1>{title}</h1>
      <StyledArticle>
        <StyledH4>{date}</StyledH4>
        <Markdown
          options={{
            overrides: {
              a: { component: Anchor },
              img: { component: Image },
            },
          }}
        >
          {markdown}
        </Markdown>
      </StyledArticle>
    </>
  );
};

export default BlogPost;
