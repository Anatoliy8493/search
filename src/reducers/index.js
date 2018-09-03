import { combineReducers } from 'redux';

import filters from './filters';
import tickets from './tickets';
import exchangeRates from './exchangeRates';

const rootReducer = combineReducers({
  filters,
  tickets,
  exchangeRates,
});

export default rootReducer;
