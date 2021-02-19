import React from 'react';

import { StyledAnchor } from './styles';

const Anchor: React.FC<{href: string}> = (props) => (
  <StyledAnchor
    {...props}
    rel="noopener"
    target="_blank"
  />
);

export default Anchor;
