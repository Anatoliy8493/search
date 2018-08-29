// @flow

import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { setFilter } from '../actions/filters';

import { font12 } from './../styles/mixins';
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
          return (
            <FilterRow key={f.type}>
              <Title>Валюта</Title>
              <CurrencyFilter {...f} onClick={setFilter} />
            </FilterRow>
          );

        case 'stops':
          return (
            <FilterRow key={f.type}>
              <Title>Количество пересадок</Title>
              <StopsFilter {...f} />
            </FilterRow>
          )

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

const FilterRow = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.div`
  ${font12}
  margin-bottom: 10px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  color: #4A4A4A;
`;
