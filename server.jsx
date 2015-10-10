/**
 * Created by eriq on 10/10/15.
 */
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { RoutingContext, match } from 'react-router';
import routes from './shared/routes';

const app = express();

app.use((request, response) => {

   match({routes, location: request.url}, (error, redirectLocation, renderProps) => {
      if (error) {
         console.error(error);
         return response.status(500).end('internal server error');
      }

      if (!renderProps) {
         return response.status(404).end('page not found');
      }

      const InitialComponent = (
         <RoutingContext {...renderProps} />
      );
      const componentHTML = ReactDOMServer.renderToString(InitialComponent);
      const HTML = `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <title>Isomorphic Redux Demo</title>
            </head>
            <body>
              <div id="react-view">${componentHTML}</div>
              <script type="application/javascript" src="/bundle.js"></script>
            </body>
        </html>
      `;

      response.end(HTML);
   })
});

export default app;