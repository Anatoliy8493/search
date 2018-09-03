import { put, all, call } from 'redux-saga/effects';

import * as api from '../api';
import * as ticketsActions from '../actions/tickets';
import * as exchangeRatesActions from '../actions/exchangeRates';

export function* fetchTickets() {
  try {
    const data = yield call(api.fetchTickets);

    if (data.ok) {
      yield put(ticketsActions.fetchTicketsSuccess(data));
    }
  } catch (error) {
    yield put(ticketsActions.fetchTicketsError(error));
  }
}

export function* fetchExchangeRates() {
  try {
    const data = yield call(api.fetchExchangeRates);

    if (data.ok) {
      yield put(exchangeRatesActions.fetchExchangeRatesSuccess(data));
    }
  } catch (error) {
    yield put(exchangeRatesActions.fetchExchangeRatesError(error));
  }
}

export default function* rootSaga() {
  yield all([
    fetchTickets(),
    fetchExchangeRates(),
  ]);
}
