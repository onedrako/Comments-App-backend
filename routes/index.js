const express = require('express')
const commentRouter = require('./comments.router')

// const userRouter = require('./users.router')

function routerApi (app) {
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/comments', commentRouter)
  // router.use('/users', userRouter)
}

module.exports = routerApi
