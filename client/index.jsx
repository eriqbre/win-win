/**
 * Created by eriq on 10/10/15.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from '../shared/routes';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import configureStore from '../shared/store/configureStore';

const history = createBrowserHistory();
let initialState = window.__INITIAL_STATE__;

// transform state into an immutable collection
Object.keys(initialState).forEach(key => {
   initialState[key] = fromJS(initialState[key]);
});

const store = configureStore(initialState);

ReactDOM.render(
   <Provider store={store}>
      <Router children={routes} history={history}/>
   </Provider>,
   document.getElementById('react-view')
);