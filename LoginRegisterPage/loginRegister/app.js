const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const validator = require('express-joi-validation').createValidator({});
const valid = require("./validator/validator")
const user = require('./schema/schema')

app.use(bodyparser.urlencoded({extended:true}));

app.set("view engine","ejs");
app.engine("html", require("ejs").renderFile);

app.get('/', (req,res)=>{
    res.render('welcome');
})
app.get('/login', (req,res)=>{
    res.render('login');
})
app.get('/register', (req,res)=>{
    res.render('register');
})
app.post('/register',validator.body(valid),(req,res)=>{
    console.log(" register by post")
    var obj= new user({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        password2:req.body.password2,
    })
    obj.save()
    .then((data) =>{
        res.send(data);
    })
    .catch((err)=>{
        res.status(500).send({
            message:err.message ||"Some error occurred"
        });
    });
});
app.delete("/delete/:id", function (req, res) {
    user.findByIdAndRemove(req.params.id).then((user) => {
        console.log("delete method called");
      if (!user) {
        return res.status(404).send({
          message: "User not found ",
        });
      }
      res.send({ message: "User deleted successfully!" });
    });
  });
app.listen(3000,(err)=>{
    if(!err)
    console.log('server connected ');
    else
    console.log("Failed"+err)
})