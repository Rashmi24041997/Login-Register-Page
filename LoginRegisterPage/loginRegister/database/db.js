const mongoose = require ("mongoose");

mongoose.connect("mongodb://localhost:27017/loginRegister",
{useNewUrlParser:true,useUnifiedTopology:true},function(err,db){
    if(!err){
        console.log("Successfully connected with MongoDB.")
    }
    else
        console.log("MongoDb is Not  connected "+err);
})
module.exports = mongoose;