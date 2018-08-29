// @flow

import type { Ticket } from '../model';
import * as types from '../constants';

type InitialState = Array<Ticket>;

const initialState = [];

export default function (state: InitialState = initialState, action) {
  switch(action.type) {
    case types.GET_TICKETS_SUCCESS:
      return [...state, ...action.payload];

    default: return state;
  }
}
