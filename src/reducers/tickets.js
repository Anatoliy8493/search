import * as types from '../constants';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_TICKETS_SUCCESS:
      return [...state, ...action.payload.tickets];

    default: return state;
  }
}
