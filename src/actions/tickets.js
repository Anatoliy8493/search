
import * as types from '../constants';

import { tickets } from '../tickets.json';

export const getTickets = () => (dispatch) => {
  // create local server and fetch data from him
  setTimeout(() => {
    dispatch({
      type: types.GET_TICKETS_SUCCESS,
      payload: tickets,
    });
  }, 100);

  return dispatch({
    type: types.GET_TICKETS,
    payload: [],
  });
};
