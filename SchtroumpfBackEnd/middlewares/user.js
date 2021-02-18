
const User = require('../models/User.model')

exports.userById = async (req, res, next, id)=>{
  
   User.findById(id).exec((err, value)=>{
     if(err || !value) res.status(404).send('user not found')
     req.profile = value;
     next();
   })
}