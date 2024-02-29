const bodyParser = require('body-parser');
const express = require('express');
// Create an express app object using express function
const app=express();
const PORT=3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true})); 
let bloglist=[];

app.get('/blogs', function (request,response){
    return response.status(404).json({
        data:bloglist,
        status:404,
        success:true
    })
})

// app.get('/home', function(req,res){
//    // console.log(req);
//    res.json({
//       message :"this is a get request in home",
//       success: true
//    })
//     res.send("welcome to home my dear");
// })

app.post('/blogs',function(req,res){
   bloglist.push({
    title: req.body.title, 
    content: req.body.content,
    id:Math.random(1000)});
   return response.status(404).json({
    status:true
   })
})

app.get('id/blogs/', (req,res)=>{
    const result=bloglist.filter( (blog)=> blog.id==req.param.id);
    return res.status(200).json({
        data:result,
        success:true
    }) 
})

app.listen(PORT, function exec(){
    console.log("Server Started in, ", PORT);
})