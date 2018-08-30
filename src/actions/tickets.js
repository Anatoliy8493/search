
import * as types from '../constants';

import { tickets } from '../tickets.json';

 export function getTickets() {
  return dispatch => {
    dispatch({
      type: types.GET_TICKETS,
      payload: [],
    });
  
    setTimeout(() => {
      dispatch({
        type: types.GET_TICKETS_SUCCESS,
        payload: tickets,
      });
    }, 2000);
  }
}
