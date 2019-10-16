// Server Node.js 

var express = require('express');
var http = require('http');
var path = require('path');
var port = process.env.PORT || 3000;
var cors = require('cors'); //abilita cors
var app = express();

// Imposta la struttura delle cartelle
app.use(express.static(__dirname + '/public'));
app.use(cors());
// imposta la route
app.get('/', (req, res,next) => {
    // res.send('Salve Padrone');
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
 
var server = http.createServer(app);
server.listen(port);
console.log("Il criceto gira sulla porta " + port);


