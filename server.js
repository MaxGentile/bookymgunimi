// Server Node.js 

var express = require('express');//abilita express
var cors = require('cors'); //abilita cors
var http = require('http');//abilita http
var path = require('path');//abilita path

var app = express();

// Imposta la struttura delle cartelle
app.use(express.static(__dirname + '/public'));

// imposta la route

var port = process.env.PORT
app.options('*', cors())
app.get('/', (req, res,next) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
 
var server = http.createServer(app);
server.listen(port);
console.log("Il criceto gira sulla porta " + port);


