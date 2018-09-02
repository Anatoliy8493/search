// @flow

import * as React from 'react';
import styled from 'styled-components';

import { Column } from './../primitives';

import StopsFilter from '../components/StopsFilter';
import CurrencyFilter from '../components/CurrencyFilter';

import type { Filter } from '../model';

type P = {
  filters: Array<Filter>,
  setFilter: () => void,
};

export default class Filters extends React.PureComponent<P> {
  renderFilters() {
    const { filters, setFilter } = this.props;

    return filters.map(f => {
      switch(f.type) {
        case 'currency':
          return <CurrencyFilter key={f.type} {...f} onClick={setFilter} />;

        case 'stops':
          return <StopsFilter key={f.type} {...f} onClick={setFilter} />;

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

const Container = styled(Column)`
  width: 100%;
`;
