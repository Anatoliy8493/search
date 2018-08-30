// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';

import { getTickets } from '../actions/tickets';

import Ticket from './../components/Ticket';
import Skeleton from './../components/Skeleton';

import { WHITE, BLACK } from './../styles/colors';
import { blink } from './../styles/keyFrames';
import { Div, Column, Row } from './../primitives';
import { hexToRgb, getNoun, formatDate } from './../helpers';
import { wh, font32, font16, flexAlign, font10, font12 } from './../styles/mixins';

import type { Ticket as TicketTypes } from '../model';

type P = {
  tickets: Array<TicketTypes>,
  getTickets: () => void,
};

type S = {
  loading: boolean,
};

class Tickets extends React.Component<P, S> {
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
      <Skeleton count={6} />
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
