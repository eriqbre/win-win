/**
 * Created by eriq on 10/10/15.
 */
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { RoutingContext, match } from 'react-router';
import routes from './shared/routes';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import configureStore from './shared/store/configureStore';
import DevTools from './shared/components/DevTools';

const app = express();

app.use((request, response) => {
   const store = configureStore();

   match({routes, location: request.url}, (error, redirectLocation, renderProps) => {
      //region handle errors
      if (error) {
         console.error(error);
         return response.status(500).end('internal server error');
      }

      if (!renderProps) {
         return response.status(404).end('page not found');
      }
      //endregion
      //region componse initial component and state
      const InitialComponent = (
         <div>
            <Provider store={store}>
               <div>
                  <RoutingContext {...renderProps} />
                  <DevTools />
               </div>
            </Provider>
         </div>
      );
      const initialState = store.getState();
      const componentHTML = ReactDOMServer.renderToString(InitialComponent);
      //endregion
      //region html
      const HTML = `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <title>win-win-server</title>
              <script type="application/javascript">
                window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
              </script>
            </head>
            <body>
              <div id="react-view">${componentHTML}</div>
              <script type="application/javascript" src="/bundle.js"></script>
            </body>
        </html>
      `;
      //endregion

      response.end(HTML);
   })
});

export default app;