// Server Node.js 

var express = require('express');
var http = require('http');
var path = require('path');
var port = process.env.PORT || 3000;
var app = express();

// Imposta la struttura delle cartelle
app.use(express.static(__dirname + '/public'));
app.use((req, res, next) => {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
   next();
}) 
// imposta la route
app.get('/', (req, res,next) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
 
var server = http.createServer(app);
server.listen(port);
console.log("Il criceto gira sulla porta " + port);


