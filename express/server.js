//jshint esversion:6

const express = require('express')
const app = express()
app.get("/",function(req,res){
    res.send("<h1>Hello World!</h1>")
})
app.get("/contact",function(req,res){
    res.send("<h1>Contact Me</h1>")
})
app.get("/about",function(req,res){
    res.send("<h1>About Me</h1>")
})
app.listen(3000,function(){
    console.log("server on port 3000")
})
