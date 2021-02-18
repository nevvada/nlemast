import Markdown from 'markdown-to-jsx';
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import Anchor from '../Anchor/Anchor';
import Image from '../Image/Image';

import PostsContext from '../../PostsContext';

import { StyledArticle, StyledH4 } from './styles';

const BlogPost: React.FC = () => {
  const { blogType, date } = useParams<Params>();

  const allPosts = useContext(PostsContext);
  const { markdown, title } = allPosts?.[blogType]?.[date] || {};

  return (
    title
        ? (
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
        )
        : <>¯\_(ツ)_/¯</>
      
  );
};

export default BlogPost;
