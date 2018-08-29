// @flow

import * as React from 'react';
import styled from 'styled-components';

import SideBar from './components/SideBar';
import Tickets from './containers/Tickets';

import { Div, Row } from './primitives';
import { container } from './styles/mixins';

import { tickets } from './tickets.json';

export default class App extends React.Component<{}> {
  render() {
    return (
      <Container>
        <Row>
          <SideBarWrapper>
            <SideBar />
          </SideBarWrapper>
          <Tickets tickets={tickets} />
        </Row>
      </Container>
    );
  }
}

const SideBarWrapper = styled(Div)`
  margin-right: 20px;
`;

const Container = styled(Div)`
  ${container}
  padding-top: 50px;
  padding-bottom: 100px;
`;
