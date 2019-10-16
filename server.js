// Server Node.js 

var express = require('express');//abilita express
var http = require('http');//abilita http
var path = require('path');//abilita path
var port = process.env.PORT || 3000;
var app = express();

// Imposta la struttura delle cartelle
app.use(express.static(__dirname + '/public'));
// imposta la route
app.get('/', (req, res,next) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
 // Enable CORS
app.use(function( req, res, next ) {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Headers", "x-requested-with, content-type");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Max-Age", "1000000000");
  // intercept OPTIONS method if ('OPTIONS' == req.method) { res.send(200); } else { next(); } });
var server = http.createServer(app);
server.listen(port);
console.log("Il criceto gira sulla porta " + port);

})
