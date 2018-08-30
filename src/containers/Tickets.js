// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getTickets } from '../actions/tickets';

import Ticket from './../components/Ticket';
import Skeleton from './../components/Skeleton';

import { Div, Column } from './../primitives';

import type { Ticket as TicketTypes } from '../model';

type P = {
  tickets: Array<TicketTypes>,
  getTickets: () => void,
};

type S = {
  loading: boolean,
};

class Tickets extends React.PureComponent<P, S> {
  state = { loading: true };

  componentWillReceiveProps(nextProps) {
    if (nextProps.tickets.length) this.setState({ loading: false });
  }
  
  componentDidMount() {
    this.props.getTickets();
  }

  renderTickets() {
    const { tickets } = this.props;

    return !!tickets.length
      ? tickets.map(ticket => (
        <TicketWrapper key={ticket.id}>
          <Ticket {...ticket} />
        </TicketWrapper>))
      : <span>по вашему запросу нет билетов</span>   
  }

  renderSkeleton() {
    return (
      <Skeleton count={6} type="ticket" />
    );
  }

  render() {
    const { tickets } = this.props;
    const { loading } = this.state;

    return (
      <Container>
        {loading ? this.renderSkeleton() : this.renderTickets()}
      </Container>
    )
  }  
}

const filterTicketsByCurrencyFilter = (filteredTickets, f) => {
  // some logic for currency filters
  return filteredTickets;
};

const filterTicketsByStopsFilter = (filteredTickets, f) => {
  const allActive = f.options.filter(f => f.value === 'all')[0].isActive;
  const activeStops = f.options.filter(f => f.isActive);

  if (allActive) return filteredTickets;
  if (!activeStops.length) return [];

  const activeStopsValues = activeStops.map(s => s.value);

  filteredTickets = filteredTickets.filter(t => {
    return activeStopsValues.includes(t.stops);
  })

  return filteredTickets;
};

const prepareTicketsToRender = (tickets, filters) => {
  if (!tickets.length) return tickets;

  let filteredTickets = tickets;

  filters.forEach(f => {
    switch(f.type) {
      case 'stops': {
        filteredTickets = filterTicketsByStopsFilter(filteredTickets, f);
        break;
      }

      case 'currency': {
        filteredTickets = filterTicketsByCurrencyFilter(filteredTickets, f);
        break;
      }

      default:
        break;
    }
  });

  return filteredTickets;
};

const mapStateToProps = ({ tickets, filters }) => ({
  tickets: prepareTicketsToRender(tickets, filters),
});

const mapDispatchToProps = dispatch => ({
  getTickets: () => dispatch(getTickets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tickets);

const Container = styled(Column)`
  width: 100%;
`;

const TicketWrapper = styled(Div)`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;
