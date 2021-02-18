import React from 'react';

const Anchor: React.FC<{href: string}> = (props) => (
  <a
    {...props}
    rel="noopener"
    target="_blank"
  />
);

export default Anchor;
