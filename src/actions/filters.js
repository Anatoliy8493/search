
import * as types from '../constants';

const setFilter = payload => {
  return {
    type: types.SET_FILTERS,
    payload,
  };
};

export default setFilter;
