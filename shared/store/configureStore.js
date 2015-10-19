/**
 * Created by eriq on 10/10/15.
 */
import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import promiseMiddleware from 'redux-simple-promise';
import Immutable from 'immutable';
import { devTools, persistState } from 'redux-devtools';
import reducer from '../reducers';

//const reducer = combineReducers(reducers);
const logger = createLogger({
   duration: true,
   transformer: (state) => {
      // transform immutable objects back to json
      var newState = {};
      for (var i of Object.keys(state)) {
         if (Immutable.Iterable.isIterable(state[i])) {
            newState[i] = state[i].toJS();
         } else {
            newState[i] = state[i];
         }
      }
      return newState;
   }
});
const createStoreWithMiddleware = compose(applyMiddleware(promiseMiddleware(), logger), devTools())(createStore);

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