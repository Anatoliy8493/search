// @flow

import * as React from 'react';
import styled from 'styled-components';

import { Div } from '../primitives';
import { Media } from '../styles/mixins';
import { WHITE } from '../styles/colors';

import Filters from '../containers/Filters';

const SideBar = () => (
  <Container>
    <Filters />
  </Container>
);

export default SideBar;

const Container = styled(Div)`
  flex-shrink: 0;
  width: 232px;
  border-radius: 5px;
  box-shadow: 0 1px 4px #5B89A4;
  background-color: ${WHITE};

  ${Media.tablet`
    position: sticky;
    top: 16px;
  `}
`;
