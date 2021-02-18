
const carnet = require('../models/Carnet.model')
const joi = require('joi')
const { carnetById } = require('../middlewares/carnet')
const UserModel = require('../models/User.model')

module.exports = {
    
    getOnecarnetByUserId(req, res, next){/*
  carnet.find(while user id is id).exec((err, value)=>{
              if(err || !value) res.status(404).send('user not found')
              req.profile = value;
              next();
            })
         */
    },

 
    async addFriend(req, res, next){
        const carnetJoiSchema = joi.object({
            friend : joi.string(),
            user : joi.string(),
        })
        const {err, value} = carnetJoiSchema.validate(req.body)
        if(err) res.send(err)
 
        res.status(201).send(await carnet.findByIdAndUpdate(req.friendship._id, req.body))
   
    },

    deleteFriend(req, res, next){
        carnet.findByIdAndDelete(req.friendship._id).exec((err, value)=>{
            if(err) res.status(404).send('cannot delete user')
            res.status(200).send(value)        
        })
    },

}

/**
 *   friend : {friendId : {type: ObjectId, ref : 'User'}},
    user : {type : ObjectId, ref : 'User'}
 */