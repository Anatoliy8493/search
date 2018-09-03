import * as types from '../constants';

export const fetchExchangeRates = () => ({
  type: types.FETCH_EXCHANGE_RATES,
});

export const fetchExchangeRatesError = error => ({
  type: types.FETCH_EXCHANGE_RATES_ERROR,
  error,
});

export const fetchExchangeRatesSuccess = payload => ({
  type: types.FETCH_EXCHANGE_RATES_SUCCESS,
  payload,
});
