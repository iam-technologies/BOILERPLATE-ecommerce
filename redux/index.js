import { createStore, /* applyMiddleware, */ compose } from 'redux';
import reducers from './reducers';

/* eslint-disable no-underscore-dangle */
const devtools = (process.browser && window.__REDUX_DEVTOOLS_EXTENSION__)
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : f => f;

const makeStore = (initialState, options) => createStore(
  reducers,
  initialState,
  compose(devtools)
);
export default makeStore;