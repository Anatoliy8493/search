// @flow

import styled from 'styled-components';

import { row, column,  } from '../styles/mixins';

// Flex
export const Column = styled.div`
  ${column}
`;

export const Row = styled.div`
  ${row}
`;

// Tags
export const Div = styled.div`
  color: ${props => props.color || 'inherit'};
`;

export const Span = styled.span`
  color: ${props => props.color || 'inherit'};
`;

export const Img = styled.img`
  width: 100%;
  border-style: none;
`;
