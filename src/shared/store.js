import {applyMiddleware, compose, createStore, combineReducers} from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import dashboardReducer from '../modules/dashboard/reducer.js';

const rootReducer = combineReducers({
  dashboardReducer,
  routing: routerReducer
});

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [
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