import Markdown from 'markdown-to-jsx';
import React from 'react';
import { useLocation } from 'react-router-dom';

type Props = Post;

const ScribblesBlogPost: React.FC = (props) => {
  const { state = {} } = useLocation();
  const { date, markdown, title } = state as Post;

  console.log('markdown', props)

  return (
    <>
      <h1>{title}</h1>
      <div>
        <Markdown>{markdown}</Markdown>
      </div>
    </>
  );
};

export default ScribblesBlogPost;
