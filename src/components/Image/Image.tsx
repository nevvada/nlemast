import React from 'react';
import { StyledDiv } from './styles';

interface HTMLImageProps {
  src: string;
  alt: string;
}

const Image: React.FC<HTMLImageProps> = (props) => (
  <StyledDiv>
    <img {...props} />
  </StyledDiv>
);

export default Image;
