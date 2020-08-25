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
    var data = {
        members:[
            {
                email_address:emailN,
                status:"subscribed",
                merge_fields:{
                    FNAME:firstN,
                    LNAME:secondN
                }
            }
        ]
    }

    var jsonData = JSON.stringify(data);

    var options = {
        url:"https://us17.api.mailchimp.com/3.0/lists/e701086c34",
        method:"POST",
        headers:{
            "Authorization":"aagneyagecb 1ef6119150ce8537f983f1f3511076ba-us17"
            
        },
        // body:jsonData
    };
    request(options,function(error,response,body){
        if (error){
            console.log(error);
        }else{
            if(response.statusCode===200){
                res.sendFile(__dirname+"/success.html");
            }else{
                res.sendFile(__dirname+"/failure.html");
            }
        }
    });
});
app.post("/failure",function(req,res){
    res.redirect("/");
})
app.listen(3000);


// 1ef6119150ce8537f983f1f3511076ba-us17

// e701086c34