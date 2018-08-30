
import * as types from '../constants';

export function setFilter(payload) {
  return {
    type: types.SET_FILTERS,
    payload,
  };
}
