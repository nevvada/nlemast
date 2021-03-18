import React from 'react';
import { StyledImg, StyledSpan } from './styles';

interface HTMLImageProps {
  alt: string;
  src: string;
}

const Image: React.FC<HTMLImageProps> = ({ alt, src }) => (
  <StyledSpan>
    <StyledImg
      alt={alt}
      src={src}
    />
  </StyledSpan>
);

export default Image;
