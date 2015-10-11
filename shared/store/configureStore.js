/**
 * Created by eriq on 10/10/15.
 */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);
const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(
   logger
)(createStore);

export default function configureStore(initialState) {
   const store = createStoreWithMiddleware(reducer, initialState);
   //const store = createStore(reducer, initialState);


   if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('../reducers', () => {
         const nextRootReducer = require('../reducers');
         store.replaceReducer(nextRootReducer);
      });
   }

   return store;
}