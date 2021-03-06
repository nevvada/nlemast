import Markdown from 'markdown-to-jsx';
import React, { useContext, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/atom-one-light.css';

import Anchor from '../Anchor/Anchor';
import Image from '../Image/Image';
import NotFound from '../NotFound/NotFound';

import PostsContext from '../../PostsContext';

import {
  StyledArticle,
  StyledDiv,
  StyledH1,
  StyledH4,
} from './styles';

const CODE_LANGUAGES = ['css', 'javascript'];

const BlogPost: React.FC = () => {
  const { blogType, date } = useParams<Params>();

  const allPosts = useContext(PostsContext);
  const { markdown, title } = allPosts?.[blogType]?.[date] || {};

  const rootRef = useRef<HTMLDivElement>();

  useEffect(() => {
    CODE_LANGUAGES.forEach((langName) => {
      const langModule = require(`highlight.js/lib/languages/${langName}`); // eslint-disable-line

      hljs.registerLanguage(langName, langModule);
    });
  }, []);

  useEffect(() => {
    rootRef.current.querySelectorAll('pre code').forEach((block: HTMLElement) => {
      hljs.highlightBlock(block);
    });
  }, []);

  return (
    title
      ? (
        <StyledDiv>
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
        </StyledDiv>
      )
      : <NotFound />
  );
};

export default BlogPost;
