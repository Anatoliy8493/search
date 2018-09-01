
import * as types from '../constants';

export function fetchTickets() {
  return {
    type: types.FETCH_TICKETS,
  };
}

export function fetchTicketsError(error) {
  return {
    type: types.FETCH_TICKETS_ERROR,
    error,
  };
}

export function fetchTicketsSuccess(payload) {
  return {
    type: types.FETCH_TICKETS_SUCCESS,
    payload,
  };
}
