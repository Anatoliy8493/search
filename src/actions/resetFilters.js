
import * as types from '../constants';

const resetFilters = payload => {
  return {
    type: types.SET_FILTERS,
    payload: { value: 'all', type: 'stops' },
  };
};

export default resetFilters;
