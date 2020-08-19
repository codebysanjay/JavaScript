const express = require("express")
const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
})
app.post("/",function(req,res){
    var p1=Number(req.body.number1)
    var p2=Number(req.body.number2)
    var p3=p1+p2
    res.send("result is "+p3)
})
app.listen(3000)