import styled from 'styled-components';

import COLORS from '../../constants/colors';

export const StyledDateSpan = styled.span`
  font-size: 0.75em;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLi = styled.li`
  align-items: center;
  display: flex;
  font-size: 1.5em;
  justify-content: space-around;
  padding: 1em;
  transition: color 0.15s ease-in-out 0s, transform 0.15s ease-in-out 0s;

  &:hover {
    color: ${COLORS.secondary};
    cursor: pointer;
    text-decoration: none;
    transform: translate(2px, 0px);
  }
`;

export const StyledTitleSpan = styled.span`
  max-width: 60%;
`;
