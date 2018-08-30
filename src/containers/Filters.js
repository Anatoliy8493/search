// @flow

import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { setFilter } from '../actions/filters';

import { Column } from './../primitives';

import CurrencyFilter from '../components/CurrencyFilter';
import StopsFilter from '../components/StopsFilter';

import type { Filter } from '../model';

type P = {
  filters: Array<Filter>,
  setFilter: (value: string) => void,
};

class Filters extends React.Component<P> {
  renderFilters() {
    const { filters, setFilter } = this.props;

    return filters.map(f => {
      switch(f.type) {
        case 'currency':
          return <CurrencyFilter key={f.type} {...f} onClick={setFilter} />;

        case 'stops':
          return <StopsFilter key={f.type} {...f} />;

        default: return null;
      }
    })
  }

  render() {
    return (
      <Container>{this.renderFilters()}</Container>
    )
  }  
}

const mapStateToProps = store => ({
  filters: store.filters,
});

const mapDispatchToProps = dispatch => ({
  setFilter: value => dispatch(setFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters)

const Container = styled(Column)`
  width: 100%;
`;
