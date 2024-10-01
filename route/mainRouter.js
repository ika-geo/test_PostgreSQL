const express = require('express')
const router = express.Router()
const userRouter = require('../route/userRouter')


router.use('/user', userRouter)

module.exports = router