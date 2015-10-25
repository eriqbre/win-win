/**
 * Created by eriq on 10/10/15.
 */
import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import promiseMiddleware from 'redux-simple-promise';
import { persistState } from 'redux-devtools';
import DevTools from '../components/DevTools';
import reducer from '../reducers';

//const reducer = combineReducers(reducers);
const logger = createLogger({
   duration: true
});
const createStoreWithMiddleware = compose(
   applyMiddleware(
      promiseMiddleware(),
      logger),
   DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {
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