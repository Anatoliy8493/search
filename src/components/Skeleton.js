// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';

import { blink } from './../styles/keyFrames';
import { hexToRgb } from './../helpers';
import { wh, Media, row, column } from './../styles/mixins';
import { BLACK, SILVER, HORIZON } from './../styles/colors';

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

const Ticket = styled.div`
  ${wh('100%', '247px')}
  ${column}
  margin-bottom: 20px;
  box-shadow: 0 1px 4px ${HORIZON};
  border-radius: 5px;
  overflow: hidden;

  &:last-child {
    margin-bottom: 0;
  }

  ${Media.desktop`
    ${row}
    height: 161px;
  `}
`;

const TicketLeft = styled.div`
  flex-shrink: 0;
  padding: 16px;
  box-shadow: 1px 0 1px ${hexToRgb(BLACK, '.08')};

  ${Media.desktop`
    ${wh('200px', '100%')}
    padding: 25px 20px;
  `}
`;

const TicketRigth = styled.div`
  padding: 16px;

  ${Media.desktop`
    ${wh('365px', '100%')}
    padding: 25px 20px;
  `}
`;

const TicketLogo = styled.div`
  ${animationCss}
  ${wh('120px', '35px')}
  margin: 0 auto 20px;
  border-radius: 4px;
  overflow: hidden;
  background-color: ${SILVER};
`;

const TicketButton = styled.div`
  ${animationCss}
  ${wh('100%', '56px')}
  border-radius: 4px;
  overflow: hidden;
  background-color: ${SILVER};
`;

const TicketRow = styled.div`
  ${animationCss}
  ${wh('100%', '15px')}
  background-color: ${SILVER};
  margin-bottom: 16px;
  border-radius: 4px;
  overflow: hidden;

  &:last-child {
    margin-bottom: 0;
  }
`;
