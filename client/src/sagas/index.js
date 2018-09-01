import { put, takeEvery, all, call } from 'redux-saga/effects';

import * as api from '../api';
import * as ticketsActions from '../actions/tickets';

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

export default function* rootSaga() {
  yield all([
    fetchTickets(),
  ])
}
