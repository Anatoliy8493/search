// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';

import { BLACK } from './../styles/colors';
import { blink } from './../styles/keyFrames';
import { Div, Row } from './../primitives';
import { hexToRgb } from './../helpers';
import { wh } from './../styles/mixins';

type P = {
  count: number,
  type: string,
};

export default class extends React.PureComponent<P> {
  renderTicketSkeletons() {
    return [...Array(this.props.count).keys()].map(s => (
      <Ticket key={s}>
        <TicketLeft>
          <TicketLogo />
          <TicketButton />
        </TicketLeft>
        <TicketRigth>
          <TicketRow />
          <TicketRow />
        </TicketRigth>
      </Ticket>
    ))
  }

  render() {
    switch(this.props.type) {
      case 'ticket': return this.renderTicketSkeletons();
      default: return null;
    }

  }
}

const animationCss = css`
  animation: ${blink} ease-in-out 1s infinite;
  opacity: 0.3;
`;

const Ticket = styled(Row)`
  ${wh('565px', '161px')}
  margin-bottom: 20px;
  box-shadow: 0 1px 4px #5B89A4;
  border-radius: 5px;
  overflow: hidden;

  &:last-child {
    margin-bottom: 0;
  }
`;

const TicketLeft = styled(Div)`
  ${wh('200px', '100%')}
  flex-shrink: 0;
  padding: 25px 20px;
  box-shadow: 1px 0 1px ${hexToRgb(BLACK, '.08')};
`;

const TicketRigth = styled(Div)`
  ${wh('365px', '100%')}
  padding: 25px 20px;
`;

const TicketLogo = styled(Div)`
  ${animationCss}
  ${wh('120px', '35px')}
  margin: 0 auto 20px;
  background-color: #cccccc;
`;

const TicketButton = styled(Div)`
  ${animationCss}
  ${wh('100%', '56px')}
  background-color: #cccccc;
`;

const TicketRow = styled(Div)`
  ${animationCss}
  ${wh('100%', '15px')}
  background-color: #cccccc;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;
