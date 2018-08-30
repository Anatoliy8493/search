import * as types from '../constants';

const initialState = [];

export default function (state: InitialState = initialState, action) {
  switch(action.type) {
    case types.GET_TICKETS_SUCCESS:
      return [...state, ...action.payload];

    default: return state;
  }
}
