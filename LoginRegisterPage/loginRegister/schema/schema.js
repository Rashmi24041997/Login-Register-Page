const mongoose = require('../database/db');

let schema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
  
    email : {
        type:String,
        required:true
    },
    password : {
        type:String,
        required:true
    },
    password2 : {
        type:String,
        required:true
    },
    date : {
        type:Date,
        default:Date.now
    }
}
)
const user = mongoose.model("User",schema)
module.exports = user
