/**
 * Created by eriq on 10/10/15.
 */
import React from 'react';
import { Route } from 'react-router';
import App from './containers';
import Home from './containers/Home';

export default (
   <Route name="app" component={App} path="/">
      <Route component={Home} path="home" />
   </Route>
);