// @flow

import * as React from 'react';
import styled from 'styled-components';

import Ticket from './../components/Ticket';

import { Div, Column } from './../primitives';

import type { Ticket as TicketTypes } from '../model';

type P = {
  tickets: Array<TicketTypes>,
};

export default class Tickets extends React.Component<P> {
  render() {
    const { tickets } = this.props;

    return (
      <Container>
        {tickets.map(ticket => (
          <TicketWrapper key={ticket.id}>
            <Ticket {...ticket} />
          </TicketWrapper>
        ))}
      </Container>
    )
  }  
}

const Container = styled(Column)`
  width: 100%;
`;

const TicketWrapper = styled(Div)`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;
