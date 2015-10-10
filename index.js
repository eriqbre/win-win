/**
 * Created by eriq on 10/10/15.
 */
'use strict';

require('babel/register')({});

var server = require('./server');

const PORT = process.env.PORT || 3000;

server.listen(PORT, function () {
   console.log('server listening on port', PORT);
});