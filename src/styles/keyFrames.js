// @flow

import { keyframes } from 'styled-components';

export const blink = keyframes`
  0% {
    opacity: .3
  }
  50% {
    opacity: .1
  }
  100% {
    opacity: .3
  }
`;
