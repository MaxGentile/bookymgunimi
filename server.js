// Server Node.js 

var express = require('express');//abilita express
var http = require('http');//abilita http
var path = require('path');//abilita path
var port = process.env.PORT || 3000;
var app = express();

// Imposta la struttura delle cartelle
app.use(express.static(__dirname + '/public'));
// imposta la route
app.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
app.get('/', (req, res,next) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
 
var server = http.createServer(app);
server.listen(port);
console.log("Il criceto gira sulla porta " + port);

})
