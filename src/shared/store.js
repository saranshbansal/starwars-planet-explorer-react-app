import {applyMiddleware, compose, createStore, combineReducers} from 'redux';
import { createLogger } from 'redux-logger';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import dashboardReducer from '../modules/dashboard/reducer.js';
import authenticationReducer from '../modules/login/reducer.js';

const rootReducer = combineReducers({
  dashboardReducer,
  authenticationReducer,
  routing: routerReducer
});

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [
  createLogger({ collapsed: true }),
  routerMiddleware(history)
];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

export default store;