// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getTickets } from '../actions/tickets';

import Ticket from './../components/Ticket';

import { Div, Column } from './../primitives';

import type { Ticket as TicketTypes } from '../model';

type P = {
  tickets: Array<TicketTypes>,
  getTickets: () => void,
};

type S = {
  loading: boolean,
};

class Tickets extends React.Component<P, S> {
  state = {
    loading: true,
  };

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
    return '...loading';
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

const mapStateToProps = store => ({
  tickets: store.tickets,
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
