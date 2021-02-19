import React from 'react';
import { StyledSpan } from './styles';

interface HTMLImageProps {
  alt: string;
  src: string;
}

const Image: React.FC<HTMLImageProps> = (props) => (
  <StyledSpan>
    <img {...props} />
  </StyledSpan>
);

export default Image;
