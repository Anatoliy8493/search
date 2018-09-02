import * as types from '../constants';

export const fetchExchangeRates = () => {
  return {
    type: types.FETCH_EXCHANGE_RATES,
  };
};

export const fetchExchangeRatesError = error => {
  return {
    type: types.FETCH_EXCHANGE_RATES_ERROR,
    error,
  };
};

export const fetchExchangeRatesSuccess = payload => {
  return {
    type: types.FETCH_EXCHANGE_RATES_SUCCESS,
    payload,
  };
};
