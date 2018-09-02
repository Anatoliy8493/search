// @flow

import * as React from 'react';
import { connect } from 'react-redux';

import setFilter from '../actions/filters';

import Filters from '../components/Filters';

import type { Filter } from '../model';

type P = {
  filters: Array<Filter>,
  setFilter: (value: string) => void,
};

class FiltersContainer extends React.PureComponent<P> {
  render() {
    const { filters, setFilter } = this.props;

    return (
      <Filters filters={filters} setFilter={setFilter} />
    )
  }  
}

const mapStateToProps = store => ({
  filters: store.filters,
});

const mapDispatchToProps = dispatch => ({
  setFilter: (type, value, only) => dispatch(setFilter({ type, value, only })),
});

export default connect(mapStateToProps, mapDispatchToProps)(FiltersContainer)
