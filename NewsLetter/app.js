const express= require("express");
const bodyParser=require("body-parser");
const request=require("request");

const app= express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
});

app.post("/",function(req,res){
    var firstN = req.body.first;
    var secondN = req.body.second;
    var emailN = req.body.email;
    console.log(firstN,secondN,emailN);
});

app.listen(3000);
