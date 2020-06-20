const express = require('express');
const bodyParser = require('body-parser')
require('./db/mongoose')
const userRouter = require('./routers/user')


const app = express()
app.use(bodyParser())
app.use(userRouter)

module.exports = app