import express from "express";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";

var data=[];


var obj={
    email:"",
    stored_password:""
 };

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
const saltrounds=2;

const port=3000;

 function search_email(inputemail){
    for(var i=0;i<data.length;i++)
    {
        if(inputemail==data[i].email){
            return data[i];
        
        }
    }
    
        return 0;
    
 }
function push_data(obj){
    data.push(obj);
    console.log(data);

}
app.get("/",async(req,res)=>{
    res.render("login.ejs");
});




app.get("/signup",async(req,res)=>{
    res.render("signup.ejs");
});

app.post("/signup",async(req,res)=>{
     var inputemail=req.body.email;
     var pass=req.body.password;
     
     var search=search_email(inputemail);
     if(search==0)
     {
       try{

        obj.email=inputemail;
       bcrypt.hash(pass,saltrounds,async(err,hash)=>{
        if(err){
            console.log("error is generated in hashing process:",err);
            }
            else{
                
                obj.stored_password=hash;
                push_data(obj);
                res.render("entered_page.ejs");
            }
           
       });
    }catch(err){
        console.log(err);
    }

}
else{
    var results="You are already registered.please login!";
    res.render("signup.ejs", {result:results},
    );
}
});





app.post("/",async(req,res)=>{
    var email=req.body.email;
    var login_pass=req.body.password;
    let save_pass=search_email(email);
    if(save_pass==0){
        var results="User not found.please Register";
        res.render("login.ejs",{result:results});
    }
    else{
        save_pass=search_email(email).stored_password;
        bcrypt.compare(login_pass,save_pass,(err,result)=>{
            if(err){
                console.log("error is generated during the comparing. ",err);
            }else{
                if(result){
                    res.render("entered_page.ejs");
                }else{
                    const results="Incorrect password! try again";
                    res.render("login.ejs",{result:results});
                }
            }

        });
        
    }
    
    
});
app.listen(port,()=>{
    console.log(`The port is running at ${port}`);
})