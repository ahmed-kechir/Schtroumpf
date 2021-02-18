const router = require("express").Router();
const userRouter = require("./user.routes")
const carnetRouter = require('./carnet.routes')


router.use("/user", userRouter)
router.use("/carnet", carnetRouter)


module.exports = router;
