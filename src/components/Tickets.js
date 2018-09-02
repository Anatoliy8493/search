// @flow

import * as React from 'react';
import styled from 'styled-components';

import Button from './../components/Button';
import Ticket from './../components/Ticket';
import Skeleton from './../components/Skeleton';

import { WHITE } from './../styles/colors';
import { Column } from './../primitives';
import { font12, font16 } from './../styles/mixins';

import type { Ticket as TicketTypes } from '../model';

type P = {
  tickets: Array<TicketTypes>,
  resetFilters: () => void,
};

type S = {
  loading: boolean,
};

export default class Tickets extends React.PureComponent<P, S> {
  state = { loading: true };

  componentWillReceiveProps(nextProps: P) {
    if (nextProps.tickets.length) this.setState({ loading: false });
  }
  
  renderTickets() {
    const { tickets, resetFilters } = this.props;

    return !!tickets.length
      ? tickets.map(ticket => (
          <TicketWrapper key={ticket.id}>
            <Ticket {...ticket} />
          </TicketWrapper>))
      : (
        <div>
          <NotFoundTitle>По вашему запросу нет билетов</NotFoundTitle>
          <Button onClick={resetFilters}>
            <NotFoundButtonInnerText>Расслабить фильтры</NotFoundButtonInnerText>
          </Button>
        </div>
      )
  }

  renderSkeleton() {
    return (
      <Skeleton count={6} type="ticket" />
    );
  }

  render() {
    const { loading } = this.state;

    return (
      <Container>
        {loading ? this.renderSkeleton() : this.renderTickets()}
      </Container>
    )
  }  
}

const Container = styled(Column)`
  width: 100%;
`;

const NotFoundTitle = styled.div`
  ${font12}
  margin-bottom: 12px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  color: #8B9497;
`;

const NotFoundButtonInnerText = styled.div`
  ${font16}
  font-weight: 600;
  font-family: Helvetica, sans-serif;
  color: ${WHITE};
`;

const TicketWrapper = styled.div`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;
