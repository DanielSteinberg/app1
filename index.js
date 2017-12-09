var http = require('http');
var route = require('./route');


http.createServer(app.handleRequest).listen(8000);