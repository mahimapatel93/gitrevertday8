var http = require('https');

//create a server object:
http.createServer(function (req, res) {
  res.write('Welcome to DevOps Training'); //write a response to the client
  res.end(); //end the response
}).listen(83); //the server object listens on port 80
