
import * as types from '../constants';

export const fetchTickets = () => ({
  type: types.FETCH_TICKETS,
});

export const fetchTicketsError = error => ({
  type: types.FETCH_TICKETS_ERROR,
  error,
});

export const fetchTicketsSuccess = payload => ({
  type: types.FETCH_TICKETS_SUCCESS,
  payload,
});
