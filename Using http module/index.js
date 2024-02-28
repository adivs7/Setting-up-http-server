// using http module we can setup a basic server 

const http = require('http');

const PORT=3000;
/*
http module contains a function called as createServer
this createServer function takes a callback as the input
inside the callback we get two arguments 
 -request ->this argument contains all the details about the incoming req
 -response ->this argument contains functions using which we can prepare the response
the createServer function returns us the server object.
*/

const server = http.createServer( function exec(request, response){
    console.log(request.url);
    if(request.url=="/home"){
        response.end("Welcome to your home");
    }
    else if(request.url=="/back"){
        response.end("Why you are going backwards ");
    }
    else{
     response.end("hello world");
    }
});

server.listen(PORT, function process(){
    console.log("Server Started");
});