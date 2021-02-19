import { Link, LinkProps } from 'react-router-dom';
import styled from 'styled-components';

import COLORS from '../../constants/colors';

export const StyledH1 = styled.h1`
  color: ${COLORS['primary']};
  font-size: 5em;
  margin: 0.5em;
`;

export const StyledH2 = styled.h2`
  font-size: 2em;
  margin: 0.5em;
`;

export const StyledHeader = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 1em;
  width: 50%;

  @media only screen and ${BREAKPOINTS['laptop']} {
    width: 60%;
  }

  @media only screen and ${BREAKPOINTS['tablet']} {
    width: 75%;
  }

  @media only screen and ${BREAKPOINTS['mobile']} {
    width: 90%;
  }

`;

export const StyledLink = styled(Link)<LinkProps & { active: 1 | 0 }>`
  color: ${props => props.active ? COLORS['secondary'] : COLORS['primary']};
  font-weight: ${props => props.active ? '900' : '100'};
  transition: color 0.15s ease-in-out 0s, transform 0.15s ease-in-out 0s;

  &:hover {
    color: ${COLORS['secondary']};
    transform: translate(2px, 0px);
  }
`;
