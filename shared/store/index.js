/**
 * Created by eriq on 10/10/15.
 */
import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';

const createStoreWithMiddleware = applyMiddleware(
   loggerMiddleware,
   promiseMiddleware
)(createStore);

export default function configureStore(reducer, initialState) {
   const store = createStoreWithMiddleware(reducer, initialState);

   if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('../reducers', () => {
         const nextRootReducer = require('../reducers');
         store.replaceReducer(nextRootReducer);
      });
   }

   return store;
}