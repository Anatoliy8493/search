// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import memoize from 'fast-memoize';

import { getTickets } from '../actions/tickets';

import Button from './../components/Button';
import Ticket from './../components/Ticket';
import Skeleton from './../components/Skeleton';

import { Div, Column } from './../primitives';
import { font12, font16 } from './../styles/mixins';
import { WHITE } from './../styles/colors';

import type { Ticket as TicketTypes } from '../model';

type P = {
  tickets: Array<TicketTypes>,
  getTickets: () => void,
  resetFilters: () => void,
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
    const { tickets, resetFilters } = this.props;

    return !!tickets.length
      ? tickets.map(ticket => (
          <TicketWrapper key={ticket.id}>
            <Ticket {...ticket} />
          </TicketWrapper>))
      : (
        <div>
          <NotFountTitle>По вашему запросу нет билетов</NotFountTitle>
          <Button display="inline" onClick={resetFilters}>
            <NotFountButtonInnerText>Расслабить фильтры</NotFountButtonInnerText>
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

const memoized = memoize(prepareTicketsToRender);

const mapStateToProps = ({ tickets, filters }) => ({
  tickets: memoized(tickets, filters),
});

const mapDispatchToProps = dispatch => ({
  getTickets: () => dispatch(getTickets()),
  resetFilters: () => dispatch({
    type: 'SET_FILTERS',
    payload: { value: 'all', type: 'stops' },
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tickets);

const Container = styled(Column)`
  width: 100%;
`;

const NotFountTitle = styled.div`
  ${font12}
  margin-bottom: 12px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  color: 8B9497;
`;

const NotFountButtonInnerText = styled.div`
  ${font16}
  color: ${WHITE};
  font-weight: 600;
  font-family: Helvetica, sans-serif;
`;

const TicketWrapper = styled(Div)`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;
