
import * as types from '../constants';

const setFilter = payload => ({
  type: types.SET_FILTERS,
  payload,
});

export default setFilter;
