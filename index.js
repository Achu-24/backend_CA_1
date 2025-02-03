const express=require('express');
const app=express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('server is running');
});

app.post('/login',(req,res)=>{
    const{username,email,password}=req.body;
});


if(!username){
    return res.status(400).json({message:"username cannot be empty"})
}

if(!email){
    return res.status(400).json({message:"email cannot be empty"})
};

if(!password){
    return res.status(400).json ({message:"password length should be greater than 8 or less than or equal to 16 "})
};

return res.status(200).json({
    message:"login successful",
    data:{
        email: email
    }

});

app.listen(3000,()=>{
    console. log("server is running");

});