import styled from 'styled-components';

import COLORS from '../../constants/colors';

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLi = styled.li`
  display: flex;
  font-size: 1.5em;
  justify-content: space-around;
  padding: 1em;
  transition: color 0.15s ease-in-out 0s, transform 0.15s ease-in-out 0s;

  &:hover {
    color: ${COLORS['secondary']};
    cursor: pointer;
    text-decoration: none;
    transform: translate(2px, 0px);
  }
`;

export const StyledSpan = styled.span`
  max-width: 60%;
`;
