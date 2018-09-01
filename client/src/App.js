// @flow

import * as React from 'react';
import styled from 'styled-components';

import SideBar from './components/SideBar';
import Tickets from './containers/Tickets';
import { PanelIcon } from './icons';

import { hexToRgb } from './helpers';
import { Div, Row } from './primitives';
import { WHITE, BLACK } from './styles/colors';
import { container, Media, flexAlign, row, wh } from './styles/mixins';

type S = {
  sideBarVisible: boolean,
};

export default class App extends React.PureComponent<{}, S> {
  state = {
    sideBarVisible: false,
  };

  toggleSideBarVisible = () => {
    this.setState(prevState => ({ sideBarVisible: !prevState.sideBarVisible }));
  };

  render() {
    const { sideBarVisible } = this.state;

    return (
      <Container>
        <Overlay show={sideBarVisible} onClick={this.toggleSideBarVisible} />
        <PanelButton onClick={this.toggleSideBarVisible}>
          <PanelIcon />
        </PanelButton>
        <Content>
          <SideBarWrapper show={sideBarVisible}>
            <SideBar />
          </SideBarWrapper>
          <Tickets />
        </Content>
      </Container>
    );
  }
}

const Container = styled(Div)`
  ${container}
  padding-top: 20px;
  padding-bottom: 40px;

  ${Media.tablet`
    padding-top: 30px;
    padding-bottom: 60px;
  `}

  ${Media.desktop`
    padding-top: 50px;
    padding-bottom: 100px;
  `}
`;

const Overlay = styled.div`
  ${wh('100vw', '100vh')}
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${hexToRgb(BLACK, '.24')};
  transition: opacity .2s;

  ${props => props.show
    ? `opacity: 1; z-index: 1;`
    : 'opacity: 0; z-index: -1;'
  }

  ${Media.tablet`
    display: none;
  `}
`;

const PanelButton = styled.button`
  ${row}
  ${flexAlign('center', 'center')}
  padding: 16px;
  margin-bottom: 20px;
  border-radius: 50%;
  overflow: hidden;
  border: none;
  background-color: ${WHITE};
  outline: none;
  box-shadow: 0 1px 16px ${hexToRgb(BLACK, '.16')};
  transition: box-shadow .2s;

  &:hover {
    box-shadow: 0 1px 16px ${hexToRgb(BLACK, '.24')};
    cursor: pointer;
  }

  ${Media.tablet`
    display: none;
  `}
`;

const Content = styled(Row)`
  position: relative;
`;

const SideBarWrapper = styled(Div)`
  position: absolute;
  z-index: 2;
  transition: transform .2s;

  ${props => props.show ? 'transform: translateX(0);': 'transform: translateX(-120%);'}

  ${Media.tablet`
    position: relative;
    margin-right: 20px;
    transform: translateX(0);
  `}
`;
