const router = require('express').Router();
const {carnetById} = require('../middlewares/carnet')
const { getOnecarnetByUserId, addFriend, deleteFriend} = require('../controllers/carnet.controller')

router.get('/one/:id', getOnecarnetByUserId)
      .post('/', addFriend)
      .delete('/:id', deleteFriend)
router.param('id', carnetById)
module.exports = router;
