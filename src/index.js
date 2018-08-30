// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { compose } from 'compose';

import rootReducer from './reducers';
import App from './App';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);

const store = createStore(rootReducer, enhancer);
const rootNode = document.getElementById('root');

rootNode && ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootNode,
);
