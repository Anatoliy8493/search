// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import memoize from 'fast-memoize';

import { fetchTickets } from '../actions/tickets';
import { fetchExchangeRates } from '../actions/exchangeRates';
import resetFilters from '../actions/resetFilters';

import Tickets from '../components/Tickets';

import type { Ticket as TicketTypes } from '../model';

type P = {
  tickets: Array<TicketTypes>,
  fetchTickets: () => void,
  resetFilters: () => void,
  fetchExchangeRates: () => void,
};

class TicketsContainer extends React.PureComponent<P> {
  componentDidMount() {
    this.props.fetchTickets();
    this.props.fetchExchangeRates();
  }

  render() {
    const { tickets, resetFilters } = this.props;

    return <Tickets tickets={tickets} resetFilters={resetFilters} />
  }  
}

const filterTicketsByCurrency = (filteredTickets, filter, exchangeRates) => {
  const currentCurrency = filter.options.filter(o => o.isActive)[0].value;

  if (!exchangeRates.length) return filteredTickets;

  const ratio = exchangeRates.filter(r => r.currency === currentCurrency)[0].value;

  return filteredTickets.map(t => {
    // not approved by marketing :D
    return {...t, ...{ price: { currency: currentCurrency, value: (t.price / ratio).toFixed(0) } }}
  });
};

const filterTicketsByStops = (filteredTickets, filter) => {
  const allActive = filter.options.filter(o => o.value === 'all')[0].isActive;
  const activeStops = filter.options.filter(o => o.isActive);

  if (allActive) return filteredTickets;
  if (!activeStops.length) return [];

  const activeStopsValues = activeStops.map(s => s.value);

  filteredTickets = filteredTickets.filter(t => {
    return activeStopsValues.includes(t.stops);
  })

  return filteredTickets;
};

const prepareTicketsToRender = (tickets, filters, exchangeRates) => {
  if (!tickets.length) return tickets;

  let filteredTickets = tickets;

  filters.forEach(f => {
    switch(f.type) {
      case 'stops': {
        filteredTickets = filterTicketsByStops(filteredTickets, f);
        break;
      }

      case 'currency': {
        filteredTickets = filterTicketsByCurrency(filteredTickets, f, exchangeRates);
        break;
      }

      default:
        break;
    }
  });

  return filteredTickets;
};

const memoized = memoize(prepareTicketsToRender);

const mapStateToProps = ({ tickets, filters, exchangeRates }) => ({
  tickets: memoized(tickets, filters, exchangeRates),
  exchangeRates,
});

const mapDispatchToProps = dispatch => ({
  fetchTickets: () => dispatch(fetchTickets()),
  fetchExchangeRates: () => dispatch(fetchExchangeRates()),
  resetFilters: () => dispatch(resetFilters()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketsContainer);
