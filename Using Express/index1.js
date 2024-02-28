const express = require('express');
// Create an express app object using express function
const app=express();
const PORT=3000;

app.get('/', function (request,response){
    response.send("welcome to my first express server");
})
app.get('/home', function(req,res){
   // console.log(req);
   res.json({
      message :"this is a get request in home",
      success: true
   })
    res.send("welcome to home my dear");
})

app.post('/home',function(req,res){
    res.send("Post request");
})

app.listen(PORT, function exec(){
    console.log("Server Started");
})