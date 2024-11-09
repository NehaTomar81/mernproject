
const express = require('express');
const apps = express.Router();
const myschematype = require("../myschematype/common")

apps.get("/", (req, res) => {
    res.send("welcome to express js");
});

apps.get("/about", (req, res) => {
    res.send("welcome about js");
});

apps.get("/alldata", async(req, res) => {
    const alld =  await myschematype.find();
    res.send(alld);
});

apps.post("/register" , async(req , res)=>{
    const {email,firstname,lastname,phone,dob,course,pass} = req.body
    const adduser = new myschematype({
        email,firstname,lastname, phone,dob,course,pass
    })
      await adduser.save();
    res.status(200).json(adduser)
})

apps.post("/login", async(req, res) => {
    const {name, email, pass } = req.body;
    if (name ==="" || email === "" || pass === "") {
        res.status(412).json({ message: "error name email and pass", status: 420 });
    }
    else {
        const logindetails = await myschematype.findOne({ email: email });
        if(logindetails){
            if(logindetails.email === email && logindetails.pass === pass){
                res.status(220).json({message: "welcome" , status:220})
            }
            else{
                res.status(300).json({message:"email and password does not match" , status: 421})
            }
        }
            else{
                res.status(300).json({message:error , status:400});
                
        
        }
    }
})

module.exports=apps; 