import React from 'react';
import { StyledSpan } from './styles';

interface HTMLImageProps {
  alt: string;
  src: string;
}

const Image: React.FC<HTMLImageProps> = ({ alt, src }) => (
  <StyledSpan>
    <img
      alt={alt}
      src={src}
    />
  </StyledSpan>
);

export default Image;
