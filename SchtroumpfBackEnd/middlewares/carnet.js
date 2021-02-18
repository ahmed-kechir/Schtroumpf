
const Carnet = require('../models/Carnet.model')

exports.carnetById = async (req, res, next, id)=>{

    Carnet.findById(id).exec((err, value)=>{
     if(err || !value) res.status(404).send('carnet not found')
     req.friendship = value;
     next();
   })
}