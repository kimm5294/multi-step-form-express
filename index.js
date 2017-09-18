var express    = require('express'),
    app        = express(),
    mongoose   = require('mongoose'),
    bodyParser = require('body-parser'),
    Profile    = require('./models/profile');


mongoose.connect("mongodb://localhost/forms");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/profiles", (req,res)=>{
  let profiles = Profile.find();
  res.render("test.ejs");
})

app.post("/profiles", (req,res)=>{
  console.log("hit");
})

app.listen(process.env.PORT, process.env.IP);