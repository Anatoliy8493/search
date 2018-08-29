// @flow

import * as React from 'react';

import { LogoIcon } from './icons';

import SideBar from './components/SideBar';
import Tickets from './containers/Tickets';

import { Div, Row } from './primitives';
import { container } from './styles/mixins';

import { tickets } from './tickets.json';

export default class App extends React.Component {
  render() {
    return (
      <Container>
        {/* <LogoIcon /> */}
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

const SideBarWrapper = Div.extend`
  margin-right: 20px;
`;

const Container = Div.extend`
  ${container}
  padding-top: 50px;
  padding-bottom: 100px;
`;
