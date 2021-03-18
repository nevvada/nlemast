import styled from 'styled-components';

import BREAKPOINTS from '../../constants/breakpoints';

export const StyledImg = styled.img`
  height: auto;
  margin-top: 2em;
  width: 80%;
  
  @media only screen and ${BREAKPOINTS.tablet} {
    margin-top: 0em;
  }
`;
