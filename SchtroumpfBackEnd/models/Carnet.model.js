const { number } = require('joi')
const mongoose = require('mongoose');
const User = require('./User.model');
const {Schema} = mongoose;
const {ObjectId} = Schema;


const carnetSchema = new Schema({
    friend : {type: ObjectId, ref : 'User'},
    user : {type : ObjectId, ref : 'User'}

},{timestamps: true})


module.exports = new mongoose.model('Carnet', carnetSchema);