
import * as types from '../constants';

export const fetchTickets = () => {
  return {
    type: types.FETCH_TICKETS,
  };
};

export const fetchTicketsError = error => {
  return {
    type: types.FETCH_TICKETS_ERROR,
    error,
  };
};

export const fetchTicketsSuccess = payload => {
  return {
    type: types.FETCH_TICKETS_SUCCESS,
    payload,
  };
};
