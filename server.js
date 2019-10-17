// Server Node.js 

var express = require('express');//abilita express
var path = require('path');//abilita path
var http = require('http');
var port = process.env.PORT || 3000;
var app = express();



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  if (process.env.NODE_ENV === 'production') {
	app.use(express.static("public"));
}

app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, '/public', 'index.html'));
});

 
var server = http.createServer(app);
server.listen(port);
console.log("Il criceto gira sulla porta " + port);
