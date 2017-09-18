var express    = require('express'),
    app        = express(),
    mongoose   = require('mongoose'),
    bodyParser = require('body-parser'),
    Profile    = require('./models/profile');


mongoose.connect("mongodb://localhost/forms");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/profiles", (req,res)=>{
  let profiles = Profile.find();
  res.json(JSON.stringify({profiles: profiles}));
})

app.post("/profiles", (req,res)=>{
  console.log("hit");
})

app.listen(8080, (req,res)=>{
  console.log("Server is starting...");
})