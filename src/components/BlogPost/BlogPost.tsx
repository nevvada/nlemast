import Markdown from 'markdown-to-jsx';
import React, { useContext, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-light.css';

import Anchor from '../Anchor/Anchor';
import Image from '../Image/Image';

import PostsContext from '../../PostsContext';

import { StyledArticle, StyledH1, StyledH4 } from './styles';

const BlogPost: React.FC = () => {
  const { blogType, date } = useParams<Params>();

  const allPosts = useContext(PostsContext);
  const { markdown, title } = allPosts?.[blogType]?.[date] || {};

  const rootRef = useRef<HTMLDivElement>();

  useEffect(() => {
    rootRef.current.querySelectorAll('pre code').forEach((block: HTMLElement) => {
      hljs.highlightBlock(block);
    });
  }, []);

  return title
    ? (
      <>
        <StyledH1>{title}</StyledH1>
        <StyledArticle>
          <StyledH4>{date}</StyledH4>
          <div ref={rootRef}>
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
          </div>
        </StyledArticle>
      </>
    )
    : <>¯\_(ツ)_/¯</>;
};

export default BlogPost;
