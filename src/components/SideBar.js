// @flow

import * as React from 'react';
import styled from 'styled-components';

import { Div } from '../primitives';

import Filters from '../containers/Filters';

export default class SideBar extends React.Component<{}> {
  render() {
    return (
      <Container>
        <Filters />
      </Container>
    )
  }  
}

const Container = styled(Div)`
  flex-shrink: 0;
  width: 232px;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 1px 4px #5B89A4;
`;
