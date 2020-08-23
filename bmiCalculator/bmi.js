const express = require("express");
const app = express();
const bodyParser= require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
})
app.post("/",function(req,res){
    var wei=Number(req.body.weight)
    var hei=Number(req.body.height)
    var bmiIndex=wei/(hei*hei*0.0001)
    res.send("Your Bmi Index is "+bmiIndex.toFixed(1))
})

app.listen(3000)