const User = require('../models/User.model');
const joi = require('joi'); // validator

module.exports = {
    getAllUser(req, res, next){
        User.find({}).exec((err, data)=>{
            if(err || !data) res.status(404).send('non user was found')
            res.send(data)
        })
    },
    getOneUser(req,res, next){
        // need to clean sensitive information from req.profile before send it back
            res.status(200).send(req.profile);
    },
     createUser(req, res, next){
        
        const joiSchema = joi.object({
  
  username: joi.string().min(3).max(50).required(),
  password: joi.string().min(4).max(50).required(), /**we should hash it before storing it in DB */
  age: joi.number().min(0),
            famille: joi.string().min(3).max(50),
            race: joi.string().min(3).max(50),
            nourriture: joi.string().min(3).max(50),          
        })
        const {err, value} = joiSchema.validate(req.body)
        if(err) res.status(404).send('cannot create user')
        const user = new User(req.body);
        
        user.save((err, data)=>{
            if(err) res.status(404).send('cannot persist user')
            res.status(201).send(data)
        
        });
    },
     updateUser(req, res, next){
        const joiSchema = joi.object({
  
            username: joi.string().min(3).max(50).required(),
            password: joi.string().min(4).max(50).required(), /**we should hash it before storing it in DB */
            age: joi.number().min(0),
                      famille: joi.string().min(3).max(50),
                      race: joi.string().min(3).max(50),
                      nourriture: joi.string().min(3).max(50),          
                  })
        const {err, value} = joiSchema.validate(req.body)
        if(err) res.status(404).send('cannot update user, data is not valide')
        User.findByIdAndUpdate(req.profile._id, req.body).exec((err, value)=>{
            if(err) res.status(404).send('cannot update user')
            res.status(201).send(value)
        })
    },
    
}