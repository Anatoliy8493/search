// @flow

import * as types from '../constants';

import type { Filters } from '../model';

type InitialState = Array<Filters>;

const initialState = [
  {
    type: 'currency',
    options: [
      {
        isActive: true,
        label: 'RUB',
        value: 'rub',
      },
      {
        isActive: false,
        label: 'USD',
        value: 'usd',
      },
      {
        isActive: false,
        label: 'EUR',
        value: 'eur',
      },
    ],
  },
  {
    type: 'stops',
    options: [
      {
        isActive: false,
        label: 'Все',
        value: 'all',
      },
      {
        isActive: false,
        label: 'Без пересадок',
        value: 0,
      },
      {
        isActive: false,
        label: '1 пересадка',
        value: 1,
      },
      {
        isActive: false,
        label: '2 пересадки',
        value: 2,
      },
      {
        isActive: false,
        label: '3 пересадки',
        value: 3,
      },
    ],
  }
];

export default function (state: InitialState = initialState, action) {
  switch(action.type) {
    case types.SET_FILTERS:
      // TODO need to update filters state
      return state;

    default: return state;
  }
}
