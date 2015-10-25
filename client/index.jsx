/**
 * Created by eriq on 10/10/15.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import DevTools from '../shared/components/DevTools';
import routes from '../shared/routes';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import configureStore from '../shared/store/configureStore';

const history = createBrowserHistory();
let initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

ReactDOM.render(
   <div>
      <Provider store={store}>
         <div>
            <Router children={routes} history={history}/>
            <DevTools />
         </div>
      </Provider>
   </div>,
   document.getElementById('react-view')
);