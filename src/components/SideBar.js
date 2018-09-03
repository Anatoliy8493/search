// @flow

import * as React from 'react';
import styled from 'styled-components';

import { Media } from '../styles/mixins';
import { WHITE, HORIZON } from '../styles/colors';
import { hexToRgb } from '../helpers';

import Filters from '../containers/Filters';

const SideBar = () => (
  <Container>
    <Filters />
  </Container>
);

export default SideBar;

const Container = styled.div`
  flex-shrink: 0;
  width: 232px;
  border-radius: 5px;
  box-shadow: 0 1px 4px ${hexToRgb(HORIZON, '.25')};
  background-color: ${WHITE};

  ${Media.tablet`
    position: sticky;
    top: 16px;
  `}
`;
