// Server Node.js 

var express = require('express');//abilita express
var http = require('http');//abilita http
var path = require('path');//abilita path

var app = express();
var port = process.env.PORT
// Imposta la struttura delle cartelle
app.use(express.static(__dirname + '/public'));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://bookymgunimi.netsons.org/"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// imposta la route
app.get('/', (req, res,next) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.post('/', function(req, res, next) {
    // Handle the post for this route
   });
var server = http.createServer(app);
server.listen(port);
console.log("Il criceto gira sulla porta " + port);


