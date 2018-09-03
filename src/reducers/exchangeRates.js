import * as types from '../constants';

const initialState = [];

export default function (state: InitialState = initialState, action) {
  switch(action.type) {
    case types.FETCH_EXCHANGE_RATES_SUCCESS:
      return [...state, ...action.payload.rates];

    default: return state;
  }
}
