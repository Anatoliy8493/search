// @flow

import * as React from 'react';

import Ticket from './../components/Ticket';

import { Div, Column } from './../primitives';

export default class Tickets extends React.Component {
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

const Container = Column.extend`
  width: 100%;
`;

const TicketWrapper = Div.extend`
  margin-bottom: 20px;
`;
