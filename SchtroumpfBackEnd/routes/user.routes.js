const router = require("express").Router();
const {userById} = require('../middlewares/user')
const {} = require('../middlewares/auth')
const {getAllUser, createUser, updateUser, deleteUser, getOneUser} = require("../controllers/user.controller")


router.route("/")
      .get(getAllUser)
      .post(createUser)

router
      .get('/one/:id', getOneUser)
      .patch("/:id", updateUser)

router.param('id', userById)

module.exports = router;