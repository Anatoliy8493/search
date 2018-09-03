
import * as types from '../constants';

const resetFilters = () => ({
  type: types.SET_FILTERS,
  payload: { value: 'all', type: 'stops' },
});

export default resetFilters;
