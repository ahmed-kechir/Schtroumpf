const mongoose = require('mongoose');
const {Schema} = mongoose;


const userSchema = new Schema({
    famille : {type : String, minlength: 3, maxlength: 50},
    race : {type : String, minlength: 3, maxlength: 50},
    nourriture : {type : String, minlength: 3, maxlength: 50},
    username : {type : String, minlength: 3, maxlength: 50},
    password : {type : String, minlength: 3, maxlength: 500},
    age : {type : Number},
    

},{timestamps: true})


module.exports = new mongoose.model('User', userSchema);