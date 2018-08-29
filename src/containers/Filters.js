// @flow

import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { Column } from './../primitives';

import CurrencyFilter from '../components/CurrencyFilter';
import StopsFilter from '../components/StopsFilter';

class Filters extends React.Component<{}> {
  renderFilters() {
    const { filters } = this.props;

    return filters.map(f => {
      switch(f.type) {
        case 'currency':
          return <CurrencyFilter key={f.type} {...f} />

        case 'stops':
          return <StopsFilter key={f.type} {...f} />

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

const mapStateToProps = store => ({
  filters: store.filters,
});

export default connect(mapStateToProps)(Filters)
